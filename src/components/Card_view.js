import { useEffect, useState } from "react";
import Header from "./Header";

const CardView =({ id })=>{

    const [cardInfo, setCardInfo] = useState({});
    useEffect(() => {
        if(!!id) {
            fetch("https://voxelxrinkeby.mypinata.cloud/ipfs/QmVZdfY5u3L2xoUtVLTmKSFe97FiepychpVkVGtGVJ8xzU/"+id+".json")
            .then((res) => res.json())
            .then((data) => {
                setCardInfo({
                    id:id ,
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
                });
            })
        }
    }, []);
    
    return (
        <>
            {/* {console.log('ssss' ,cardInfo)} */}
            <div className="no-bottom no-top" id="content">
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
                <section aria-label="section" className="sm-mt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <img src={cardInfo.images} className="img-fluid img-rounded mb-sm-30" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="item_info">
                                {cardInfo.collection}  <div className="de_countdown" data-year="2022" data-month="2" data-day="16" data-hour="8"></div>
                                    <h2>{cardInfo.collection}  </h2>
                                    <div className="item_info_counts">
                                        <div className="item_info_type"><i className="fa fa-image"></i>Art</div>
                                        <div className="item_info_views"><i className="fa fa-eye"></i>250</div>
                                        <div className="item_info_like"><i className="fa fa-heart"></i>18</div>
                                    </div>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                
                                    <div className="spacer-40"></div>

                                    <div className="de_tab tab_simple">

                                    <ul className="de_nav">
                                        <li className="active"><span>Details</span></li>
                                        <li><span>Bids</span></li>
                                        <li><span>History</span></li>
                                    </ul>
                                    
                                    <div className="de_tab_content">
                                        <div className="tab-1">
                                        
                                            <div className="spacer-40"></div>
                                            <h6>Properties</h6>
                                            <div className="row gx-2">
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Background</h5>
                                                        <h4>{cardInfo.Background}</h4>
                                                        {/* <span>85% have this trait</span> */}
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Body</h5>
                                                        <h4>{cardInfo.Body}</h4>
                                                        {/* <span>14% have this trait</span> */}
                                                    </a>
                                                </div>
                                                
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Hat</h5>
                                                        <h4>{cardInfo.Hat}</h4>
                                                        {/* <span>33% have this trait</span> */}
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Glasses</h5>
                                                        <h4>{cardInfo.Glasses}</h4>
                                                        {/* <span>62% have this trait</span> */}
                                                    </a>
                                                </div>      
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Clothes</h5>
                                                        <h4>{cardInfo.Clothe}</h4>
                                                        {/* <span>78% have this trait</span> */}
                                                    </a>
                                                </div>                                   
                                            </div>
                                            <div className="spacer-30"></div>
                                        </div>
                                        
                                    </div>

                                    <div className="spacer-10"></div>

                                    <h6>Price</h6>
                                    <div className="nft-item-price"><img src="images/misc/ethereum.svg" alt="" /><span>0.059</span>($253.67)</div>

                                    <a href="#" className="btn-main btn-lg" data-bs-toggle="modal" data-bs-target="#buy_now">
                                    Buy Now
                                    </a>
                                    &nbsp;
                                    <a href="#" className="btn-main btn-lg btn-light" data-bs-toggle="modal" data-bs-target="#place_a_bid">
                                    Place a Bid
                                    </a>
                                    
                                </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardView ;