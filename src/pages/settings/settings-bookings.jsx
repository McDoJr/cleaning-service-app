import styles from "./settings-bookings.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBackground, getBookings, scrollToTop, setPageTitle} from "../../utils/utils.jsx";

const SettingsBookings = ({bookings, handleCancel}) => {

    const navigate = useNavigate();

    useEffect(() => {
        setPageTitle("Settings - Bookings");
        scrollToTop();
    }, []);

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <div className={styles.left}>
                    <span onClick={() => navigate("/settings/personal-information")}>Settings</span>
                    <span onClick={() => navigate("/settings/address")}>Address</span>
                    <span>Bookings <FontAwesomeIcon icon={faCaretLeft} className={styles.icon}/></span>
                </div>
                <div className={styles.right}>
                    <h3>BOOKINGS</h3>
                    {bookings.map(({service, hours, date, time, price, total}, index) => {
                        return (
                            <div className={styles.card} key={index}>
                                <div>Booked</div>
                                <div className={styles.details}>
                                    <img src={getBackground(service)}/>
                                    <div>
                                        <h4>{service}</h4>
                                        <span>{`Hour/s: ${hours} Hour`}</span>
                                        <span>{`Date: ${date}`}</span>
                                        <span>{`Work Time: ${time}`}</span>
                                    </div>
                                    <h4>{`₱ ${total}.00`}</h4>
                                </div>
                                <button onClick={() => handleCancel(index)}>Cancel Booking</button>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default SettingsBookings;