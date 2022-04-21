// import Common from "./Common";
import { useMoralis } from "react-moralis";

const Header = () => {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    const login = async () => {

        console.log("login", isAuthenticated);

        if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
            .then(function (user) {
            console.log("logged in user:", user);
            // console.log(user!.get("ethAddress"));
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }
    
    return (
        <>
            {/* <Common/> */}
            <header className="transparent">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    <div id="logo">
                                        <a href="03_grey-index.html">
                                            <img alt="" src="images/logo-3.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="de-flex-col">
                                    <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                        <a href="03_grey-index.html">Home<span></span></a>
                                        <ul>
                                            <li><a href="03_grey-index.html">Homepage 1</a></li>
                                            <li><a href="03_grey-index-2.html">Homepage 2</a></li>
                                            <li><a href="03_grey-index-3.html">Homepage 3</a></li>
                                            <li><a href="03_grey-index-4.html">Homepage 4</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="03_grey-explore.html">Explore<span></span></a>
                                        <ul>
                                            <li><a href="03_grey-explore.html">Explore</a></li>
                                            <li><a href="03_grey-explore-2.html">Explore 2</a></li>
                                            <li><a href="03_grey-explore-music-nft.html">New: Music NFT</a></li>
                                            <li><a href="03_grey-collection.html">Collections</a></li>
                                            <li><a href="03_grey-live-auction.html">Live Auction</a></li>
                                            <li><a href="03_grey-item-details.html">Item Details</a></li>
                                            <li><a href="03_grey-help-center.html">Help Center</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="03_grey-author.html">Author<span></span></a>
                                        <ul>
                                            <li><a href="03_grey-author.html">Author</a></li>
                                            <li><a href="03_grey-profile.html">Profile</a></li>
                                            <li><a href="03_grey-wallet.html">Wallet</a></li>
                                            <li><a href="03_grey-create-options.html">Create</a></li>
                                            <li><a href="03_grey-login.html">Login</a></li>
                                        </ul>
                                    </li>                                    
                                    <li>
                                        <a href="#">Stats<span></span></a>
                                        <ul>
                                            <li><a href="03_grey-activity.html">Activity</a></li>
                                            <li><a href="03_grey-rankings.html">Rankings</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="menu_side_area">
                                    <a  onClick={login} className="btn-main btn-wallet"><i className="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                    <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </>
    )
}

export default Header ;