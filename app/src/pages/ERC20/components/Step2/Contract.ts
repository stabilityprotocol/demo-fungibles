export const erc20Contract = {
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "symbol",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "mintAmount",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burnFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256",
        },
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60806040523480156200001157600080fd5b5060405162002103380380620021038339818101604052810190620000379190620003d5565b828281600390816200004a9190620006b0565b5080600490816200005c9190620006b0565b5050506200007133826200007a60201b60201c565b505050620008b2565b6200008c82826200009060201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000102576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f990620007f8565b60405180910390fd5b6200011660008383620001fd60201b60201c565b80600260008282546200012a919062000849565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001dd919062000895565b60405180910390a3620001f9600083836200020260201b60201c565b5050565b505050565b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002708262000225565b810181811067ffffffffffffffff8211171562000292576200029162000236565b5b80604052505050565b6000620002a762000207565b9050620002b5828262000265565b919050565b600067ffffffffffffffff821115620002d857620002d762000236565b5b620002e38262000225565b9050602081019050919050565b60005b8381101562000310578082015181840152602081019050620002f3565b60008484015250505050565b6000620003336200032d84620002ba565b6200029b565b90508281526020810184848401111562000352576200035162000220565b5b6200035f848285620002f0565b509392505050565b600082601f8301126200037f576200037e6200021b565b5b8151620003918482602086016200031c565b91505092915050565b6000819050919050565b620003af816200039a565b8114620003bb57600080fd5b50565b600081519050620003cf81620003a4565b92915050565b600080600060608486031215620003f157620003f062000211565b5b600084015167ffffffffffffffff81111562000412576200041162000216565b5b620004208682870162000367565b935050602084015167ffffffffffffffff81111562000444576200044362000216565b5b620004528682870162000367565b92505060406200046586828701620003be565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004c257607f821691505b602082108103620004d857620004d76200047a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005427fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000503565b6200054e868362000503565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620005916200058b62000585846200039a565b62000566565b6200039a565b9050919050565b6000819050919050565b620005ad8362000570565b620005c5620005bc8262000598565b84845462000510565b825550505050565b600090565b620005dc620005cd565b620005e9818484620005a2565b505050565b5b81811015620006115762000605600082620005d2565b600181019050620005ef565b5050565b601f82111562000660576200062a81620004de565b6200063584620004f3565b8101602085101562000645578190505b6200065d6200065485620004f3565b830182620005ee565b50505b505050565b600082821c905092915050565b6000620006856000198460080262000665565b1980831691505092915050565b6000620006a0838362000672565b9150826002028217905092915050565b620006bb826200046f565b67ffffffffffffffff811115620006d757620006d662000236565b5b620006e38254620004a9565b620006f082828562000615565b600060209050601f83116001811462000728576000841562000713578287015190505b6200071f858262000692565b8655506200078f565b601f1984166200073886620004de565b60005b8281101562000762578489015182556001820191506020850194506020810190506200073b565b868310156200078257848901516200077e601f89168262000672565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620007e0601f8362000797565b9150620007ed82620007a8565b602082019050919050565b600060208201905081810360008301526200081381620007d1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000856826200039a565b915062000863836200039a565b92508282019050808211156200087e576200087d6200081a565b5b92915050565b6200088f816200039a565b82525050565b6000602082019050620008ac600083018462000884565b92915050565b61184180620008c26000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b4114610286578063a457c2d7146102a4578063a9059cbb146102d4578063dd62ed3e14610304576100f5565b806342966c681461020057806370a082311461021c57806379cc67901461024c5780638da5cb5b14610268576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610334565b60405161010f9190610f37565b60405180910390f35b610132600480360381019061012d9190610ff2565b6103c6565b60405161013f919061104d565b60405180910390f35b6101506103e9565b60405161015d9190611077565b60405180910390f35b610180600480360381019061017b9190611092565b6103f3565b60405161018d919061104d565b60405180910390f35b61019e610422565b6040516101ab9190611101565b60405180910390f35b6101ce60048036038101906101c99190610ff2565b61042b565b6040516101db919061104d565b60405180910390f35b6101fe60048036038101906101f99190610ff2565b610462565b005b61021a6004803603810190610215919061111c565b610470565b005b61023660048036038101906102319190611149565b610484565b6040516102439190611077565b60405180910390f35b61026660048036038101906102619190610ff2565b6104cc565b005b6102706104ec565b60405161027d9190611185565b60405180910390f35b61028e6104f4565b60405161029b9190610f37565b60405180910390f35b6102be60048036038101906102b99190610ff2565b610586565b6040516102cb919061104d565b60405180910390f35b6102ee60048036038101906102e99190610ff2565b6105fd565b6040516102fb919061104d565b60405180910390f35b61031e600480360381019061031991906111a0565b610620565b60405161032b9190611077565b60405180910390f35b6060600380546103439061120f565b80601f016020809104026020016040519081016040528092919081815260200182805461036f9061120f565b80156103bc5780601f10610391576101008083540402835291602001916103bc565b820191906000526020600020905b81548152906001019060200180831161039f57829003601f168201915b5050505050905090565b6000806103d16106a7565b90506103de8185856106af565b600191505092915050565b6000600254905090565b6000806103fe6106a7565b905061040b858285610878565b610416858585610904565b60019150509392505050565b60006012905090565b6000806104366106a7565b90506104578185856104488589610620565b610452919061126f565b6106af565b600191505092915050565b61046c8282610b7a565b5050565b61048161047b6106a7565b82610cd0565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104de826104d86106a7565b83610878565b6104e88282610cd0565b5050565b600032905090565b6060600480546105039061120f565b80601f016020809104026020016040519081016040528092919081815260200182805461052f9061120f565b801561057c5780601f106105515761010080835404028352916020019161057c565b820191906000526020600020905b81548152906001019060200180831161055f57829003601f168201915b5050505050905090565b6000806105916106a7565b9050600061059f8286610620565b9050838110156105e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105db90611315565b60405180910390fd5b6105f182868684036106af565b60019250505092915050565b6000806106086106a7565b9050610615818585610904565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361071e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610715906113a7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361078d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078490611439565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161086b9190611077565b60405180910390a3505050565b60006108848484610620565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108fe57818110156108f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e7906114a5565b60405180910390fd5b6108fd84848484036106af565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096a90611537565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d9906115c9565b60405180910390fd5b6109ed838383610e9d565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6a9061165b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b619190611077565b60405180910390a3610b74848484610ea2565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610be9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be0906116c7565b60405180910390fd5b610bf560008383610e9d565b8060026000828254610c07919061126f565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610cb89190611077565b60405180910390a3610ccc60008383610ea2565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3690611759565b60405180910390fd5b610d4b82600083610e9d565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610dd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc8906117eb565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e849190611077565b60405180910390a3610e9883600084610ea2565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ee1578082015181840152602081019050610ec6565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f0982610ea7565b610f138185610eb2565b9350610f23818560208601610ec3565b610f2c81610eed565b840191505092915050565b60006020820190508181036000830152610f518184610efe565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f8982610f5e565b9050919050565b610f9981610f7e565b8114610fa457600080fd5b50565b600081359050610fb681610f90565b92915050565b6000819050919050565b610fcf81610fbc565b8114610fda57600080fd5b50565b600081359050610fec81610fc6565b92915050565b6000806040838503121561100957611008610f59565b5b600061101785828601610fa7565b925050602061102885828601610fdd565b9150509250929050565b60008115159050919050565b61104781611032565b82525050565b6000602082019050611062600083018461103e565b92915050565b61107181610fbc565b82525050565b600060208201905061108c6000830184611068565b92915050565b6000806000606084860312156110ab576110aa610f59565b5b60006110b986828701610fa7565b93505060206110ca86828701610fa7565b92505060406110db86828701610fdd565b9150509250925092565b600060ff82169050919050565b6110fb816110e5565b82525050565b600060208201905061111660008301846110f2565b92915050565b60006020828403121561113257611131610f59565b5b600061114084828501610fdd565b91505092915050565b60006020828403121561115f5761115e610f59565b5b600061116d84828501610fa7565b91505092915050565b61117f81610f7e565b82525050565b600060208201905061119a6000830184611176565b92915050565b600080604083850312156111b7576111b6610f59565b5b60006111c585828601610fa7565b92505060206111d685828601610fa7565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061122757607f821691505b60208210810361123a576112396111e0565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061127a82610fbc565b915061128583610fbc565b925082820190508082111561129d5761129c611240565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006112ff602583610eb2565b915061130a826112a3565b604082019050919050565b6000602082019050818103600083015261132e816112f2565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611391602483610eb2565b915061139c82611335565b604082019050919050565b600060208201905081810360008301526113c081611384565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611423602283610eb2565b915061142e826113c7565b604082019050919050565b6000602082019050818103600083015261145281611416565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061148f601d83610eb2565b915061149a82611459565b602082019050919050565b600060208201905081810360008301526114be81611482565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611521602583610eb2565b915061152c826114c5565b604082019050919050565b6000602082019050818103600083015261155081611514565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006115b3602383610eb2565b91506115be82611557565b604082019050919050565b600060208201905081810360008301526115e2816115a6565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611645602683610eb2565b9150611650826115e9565b604082019050919050565b6000602082019050818103600083015261167481611638565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006116b1601f83610eb2565b91506116bc8261167b565b602082019050919050565b600060208201905081810360008301526116e0816116a4565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611743602183610eb2565b915061174e826116e7565b604082019050919050565b6000602082019050818103600083015261177281611736565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006117d5602283610eb2565b91506117e082611779565b604082019050919050565b60006020820190508181036000830152611804816117c8565b905091905056fea264697066735822122095b4e132184bb9377efa0ec889ab501622154855c4041db00f9c51d07ddbf32e64736f6c63430008120033",
} as const;