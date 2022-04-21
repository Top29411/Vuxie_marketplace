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
                                        <a href="#">
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
                                        <a href="#">Home<span></span></a>
                                        <ul>
                                            <li><a href="#">Homepage 1</a></li>
                                            <li><a href="#">Homepage 2</a></li>
                                            <li><a href="#">Homepage 3</a></li>
                                            <li><a href="#">Homepage 4</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Explore<span></span></a>
                                        <ul>
                                            <li><a href="#">Explore</a></li>
                                            <li><a href="#">Explore 2</a></li>
                                            <li><a href="#">New: Music NFT</a></li>
                                            <li><a href="#">Collections</a></li>
                                            <li><a href="#">Live Auction</a></li>
                                            <li><a href="#">Item Details</a></li>
                                            <li><a href="#">Help Center</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Author<span></span></a>
                                        <ul>
                                            <li><a href="#">Author</a></li>
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Wallet</a></li>
                                            <li><a href="#">Create</a></li>
                                            <li><a href="#">Login</a></li>
                                        </ul>
                                    </li>                                    
                                    <li>
                                        <a href="#">Stats<span></span></a>
                                        <ul>
                                            <li><a href="#">Activity</a></li>
                                            <li><a href="#">Rankings</a></li>
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