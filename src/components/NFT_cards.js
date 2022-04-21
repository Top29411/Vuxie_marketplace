import {useEffect, useState} from 'react'
import Card_detail from './Card_detail';
import { useMoralisWeb3Api } from "react-moralis";
import { compose } from 'redux';
import ReactLoading from "react-loading";


   
const NFT_cards =  () =>{
    
    const[cards, setCards] = useState([]) ;
    const[flg, setFlg] = useState(false) ;
    const[nowCnt , setNowCnt] = useState (30) ;
    const [mLoading ,setMLoading] = useState(false) ;
    const Web3Api = useMoralisWeb3Api();
    // useEffect(()=>{
    //     Moralis.settings.setAPIRateLimit({
    //         anonymous:20, authenticated:30, windowMs:60000
    //       })
    // }) ;

    const Comp = async () =>{
        const options = {
            address: "0x128A527883514439e5521F7f2aA867C1669f18a7",
            chain: "rinkeby",
          };

          let cursor = null ;
          let total_cnt = 0 ;
          let token_cnt = 0 ;
          let tmp = [] ;
          let token_metadata = [] ;
          do{
            const NFTs = await Web3Api.token.getAllTokenIds({ address: "0x128A527883514439e5521F7f2aA867C1669f18a7",chain: "rinkeby",cursor : cursor}) ;
            cursor = NFTs.cursor ;
            token_cnt = 0 ;
            while (1){
                if(total_cnt>= NFTs.total) break ;
                if(token_cnt >= NFTs.page_size) break ;
                tmp.push(NFTs.result[total_cnt] ) ;
                total_cnt ++ ;
                token_cnt ++ ;
            }
            // console.log(NFTs.result[1].token_id,'toto') ;
          }while (cursor != '' && cursor != null)
        //   console.log(tmp[3],'token ids') ;
          
        //   for(let i = 0 ; i< tmp.length ; i ++ ){
        //       let metadata_token = await Web3Api.token.getTokenIdMetadata({ address: "0x128A527883514439e5521F7f2aA867C1669f18a7",token_id:tmp[i].token_id ,chain: "rinkeby"}) ;
        //       token_metadata.push(metadata_token) ;
        //   }
            let temp=[] ;
            for(let i =0 ; i < tmp.length ; i ++){
                let tokenId = tmp[i].token_id ;
                
                fetch("https://voxelxrinkeby.mypinata.cloud/ipfs/QmVZdfY5u3L2xoUtVLTmKSFe97FiepychpVkVGtGVJ8xzU/"+tokenId+".json")
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log('data:', data.name , data.attributes,data.attributes[3].value);
                        
                        const newObj = {
                            id: tokenId,
                            images: data.image,
                            price: '0.08',
                            list: 'Place a bid' ,
                            date: '1/20',
                            collection: data.name ,
                            Background : data.attributes[0].value ,
                            Body : data.attributes[1].value ,
                            Clothe : data.attributes[2].value ,
                            Glasses : data.attributes[3].value ,
                            Hat : data.attributes[4].value
                        };
                        temp.push(newObj) ;
                        // console.log(temp) ;
                        setCards([...temp]) ;
                    })
            }

    }


    useEffect(()=>{

        const fetchData = async () => {
             await Comp();
            // lash.wait() ;
            setMLoading(true) ;
            console.log('22222222');
        }
        fetchData().catch(console.error);
       
    },[]) ;
 
    const calc_more=()=> {
        setNowCnt(nowCnt+50) ;
    }
    return (
        <div className="row" onLoad = {()=>setMLoading(true)} id='hidden_sh'>
            { cards.slice(0,nowCnt).map((card , idx)=>{
            //    console.log(card,idx,'ind');
                return(
                    <Card_detail
                            id={card.id}
                            images={card.images}
                            collection={card.collection}
                            price ={card.price}
                            list={card.list}
                            date={card.date}
                            key={idx}
                    />
                )
            })}
            <div className="col-md-12 text-center">
                <a id="loadmore" onClick={calc_more} className="btn-main wow fadeInUp lead">Load more</a>
            </div>    
        </div>
    )
}

export default NFT_cards ;