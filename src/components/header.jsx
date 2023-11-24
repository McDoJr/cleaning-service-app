import styles from "./header.module.css";
import {Link, useNavigate} from "react-router-dom";
import {loggedIn} from "../utils/utils.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Header = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleSetings = () => {
        setShow(false);
        navigate("/settings/personal-information");
    }

    const handleLogout = () => {
        setShow(false);
        localStorage.setItem("loggedIn", false);
        navigate("/");
    }

    const getNickname = () => {
        if(!localStorage.getItem("loggedIn") || !JSON.parse(localStorage.getItem("loggedIn"))){
            return "User";
        }
        const user = JSON.parse(localStorage.getItem("loggedIn"));
        return user.nickname ? user.nickname : "User";
    }

    const account = (
        <>
            <button className={styles.user} onClick={() => setShow(!show)}>
                {getNickname()} <FontAwesomeIcon icon={faCaretDown} className={styles.icon}/>
                <ul style={{display: show ? "block" : "none"}}>
                    <li onClick={handleSetings}><span>Settings</span></li>
                    <li onClick={handleLogout}><span>Logout</span></li>
                </ul>
            </button>
        </>
    )

    return (
        <section className={styles.container}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <img src={require("../images/logo.png")} alt="logo.png"/>
                <h1>S.A.M Cleaning Services</h1>
            </div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            {loggedIn() ? account : <button onClick={() => navigate("/signin")}>Login</button>}
        </section>
    )
}

export default Header;