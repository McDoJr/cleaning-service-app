import styles from "./settings-address-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const SettingsAddressPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <div className={styles.left}>
                    <span onClick={() => navigate("/settings/personal-information")}>Settings</span>
                    <span>Address <FontAwesomeIcon icon={faCaretLeft} className={styles.icon}/></span>
                    <span onClick={() => navigate("/settings/bookings")}>Bookings</span>
                </div>
                <form className={styles.form}>
                    <h3>ADDRESS DETAILS</h3>
                    <div className={styles.top}>
                        <div className={styles.field}>
                            <label>STREED ADDRESS</label>
                            <input type="text" name="address"/>
                        </div>
                        <div className={styles.field}>
                            <label>CITY</label>
                            <input type="text" name="city"/>
                        </div>
                        <div className={styles.field}>
                            <label>STATE</label>
                            <input type="text" name="state"/>
                        </div>
                        <div className={styles.field}>
                            <label>ZIP CODE</label>
                            <input type="number" name="zipcode"/>
                        </div>
                        <div className={styles.field}>
                            <label>COUNTRY</label>
                            <input type="text" name="country"/>
                        </div>
                    </div>
                    <button>SAVE CHANGES</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default SettingsAddressPage;