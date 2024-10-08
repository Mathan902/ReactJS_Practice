import { CiMenuBurger } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import './Header.css';
import { Store } from '../store';
import Logo from './8gzcr6RpGStvZFA2qRt4v6.jpg';
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/Actions";

const Header = () => {
    const { sidebar, dispatch } = useContext(Store);
    
    const handleMenuClick = () => {
        dispatch({ type: "action" });
    };

    const dispatchLogout = useDispatch();
    const handleLogout = ()=>{
        dispatchLogout(logout());
    }
    return (
        <div className="header">
            <div className="left-container">
                <CiMenuBurger className="icon" onClick={handleMenuClick} />
                <div className="logo-container">
                    <img src={Logo} className="logo" alt="Logo" />
                </div>
            </div>
            <div className="center-container">
                <div className="search-container">
                    <input className="search-bar" placeholder="Search" />
                    <div className="search-icon"><CiSearch /></div>
                </div>
                <IoMdMic className="mic-icon" />
            </div>
            <div className="right-container">
                <MdOutlineVideoCall className="icon" />
                <IoIosNotificationsOutline className="icon" />
                <MdOutlineAccountCircle onClick={()=>handleLogout()} className="icon" />
            </div>
            <Title/>
        </div>
    );
};

const Title = () => (
    <>
        <h1>Title</h1>
        <Head />
    </>
);
const Head = () => {
    return(
        <h1>Header</h1>
    )
};
export default Header;
