import { Link } from 'raviger'

const Card_detail =({images ,collection , price ,date, list, id}) =>{

    return (
        <>
            {/* {console.log(collection,'ddd')} */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <Link href={"/detail/" + id}>
            <div className="nft__item style-2">
                {/* <div className="de_countdown" data-year="2022" data-month="2" data-day="16" data-hour="8"></div> */}
                <div className="author_list_pp">
                        <img className="lazy" src="images/author/author-1.jpg" alt="" />
                        <i className="fa fa-check"></i>
                </div>
                <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                            <button >Buy Now</button>
                            <div className="nft__item_share">
                            </div>
                        </div>
                    </div>
                        <img src={images} className="lazy nft__item_preview" alt="" />
                </div>
                <div className="nft__item_info">
                        <h4>{collection}</h4>
                    <div className="nft__item_click">
                        <span></span>
                    </div>
                    <div className="nft__item_price">
                        {price} ETH<span>{date}</span>
                    </div>
                    <div className="nft__item_action">
                        {list}
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i><span>50</span>
                    </div>                            
                </div> 
            </div>
            </Link>
        </div> 
        </>
    )
}

export default Card_detail ;