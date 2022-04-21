
import {useEffect, useState} from 'react'
import Filter from './Filter.js' ;
import NFT_cards from './NFT_cards.js';
import Card_view from './Card_view.js';

// import Comp from './Comp.js';
// import { useMoralisWeb3Api } from "react-moralis";

const Main = () => {
    
    // const Comp = async () =>{
    //     const Web3Api = useMoralisWeb3Api();
    //     const options = {
    //         address: "0x128A527883514439e5521F7f2aA867C1669f18a7",
    //         chain: "rinkeby",
    //       };
    //       const NFTs = await Web3Api.token.getAllTokenIds(options);
    //     //   console.log(NFTs);
        
    // }

    
    return (
        <>
            {/* <Comp/> */}
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                
                <section id="subheader">
                        <div className="center-y relative text-center">
                            <div className="container">
                                <div className="row">
                                    
                                    <div className="col-md-12 text-center">
                                        <h1>Explore</h1>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                </section>
                <section aria-label="section">    
                    <Filter/>  
                    <NFT_cards/>  
                </section>
            </div>
        </>
    )
}

export default Main ;