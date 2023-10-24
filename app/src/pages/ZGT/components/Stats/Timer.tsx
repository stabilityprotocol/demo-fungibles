import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Timer = () => {
  const { t } = useTranslation();
  const [time, setTime] = useState(getTimeUntilMidnight());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeUntilMidnight()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      {Object.entries({
        [t("pages.zgt.stats.timer.hours")]: time.hours,
        [t("pages.zgt.stats.timer.minutes")]: time.minutes,
        [t("pages.zgt.stats.timer.seconds")]: time.seconds,
      }).map(([label, value]) => (
        <span key={value}>
          {`${Math.floor(value)}`.padStart(2, "0")} {label}{" "}
        </span>
      ))}
    </div>
  );
};

const getTimeUntilMidnight = () => {
  const now = new Date();
  const utcNow = new Date(now.toUTCString().substring(0, 25));
  const midnight = new Date(utcNow);
  midnight.setHours(24, 0, 0, 0);
  const timeDiff = midnight.valueOf() - utcNow.valueOf();

  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
};
