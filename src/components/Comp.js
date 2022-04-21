import React from "react";
import { useMoralisWeb3Api } from "react-moralis";


const Comp = async () =>{
    const Web3Api = useMoralisWeb3Api();
    const options = {
        address: "0x128A527883514439e5521F7f2aA867C1669f18a7",
        chain: "rinkeby",
      };
      const NFTs = await Web3Api.token.getAllTokenIds(options);
      console.log(NFTs);
    return (
        <></>
    ) ;
}

export default Comp ;