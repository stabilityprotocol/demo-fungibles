import { AtomEffect } from "recoil";

function isIsoDate(str: string) {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
  const d = new Date(str);
  return d instanceof Date && !isNaN(d.getTime()) && d.toISOString() === str; // valid date
}

export const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      const parsedValue = JSON.parse(savedValue);

      function checkDates(obj: any) {
        if (Array.isArray(obj)) {
          obj.forEach((item, index) => {
            if (typeof item === "string" && isIsoDate(item)) {
              obj[index] = new Date(item);
            } else if (typeof item === "object" && item !== null) {
              checkDates(item);
            }
          });
        } else {
          for (const key in obj) {
            if (typeof obj[key] === "string" && isIsoDate(obj[key])) {
              obj[key] = new Date(obj[key]);
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
              checkDates(obj[key]);
            }
          }
        }
      }

      checkDates(parsedValue);

      setSelf(parsedValue);
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };