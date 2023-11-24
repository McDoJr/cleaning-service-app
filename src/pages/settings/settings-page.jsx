import styles from "./settings-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const SettingsPage = ({handleEditUser}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({firstname: "", lastname: "", nickname: "", email: "", current_password: "", password: "", confirm_password: ""});

    const handleChange = (e) => {
        const {name, value}  = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        const user = JSON.parse(localStorage.getItem("loggedIn"));
        for(let key in formData) {
            if(formData[key] !== "") {
                console.log(formData[key])
                user[key] = formData[key];
            }
        }
        handleEditUser(user);
    }

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <div className={styles.left}>
                    <span>Settings <FontAwesomeIcon icon={faCaretLeft} className={styles.icon}/></span>
                    <span onClick={() => navigate("/settings/address")}>Address</span>
                    <span onClick={() => navigate("/settings/bookings")}>Bookings</span>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h3>PERSONAL INFORMATION</h3>
                    <div className={styles.top}>
                        <div className={styles.field}>
                            <label>FIRST NAME</label>
                            <input type="text" name="firstname" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>LAST NAME</label>
                            <input type="text" name="lastname" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>NICK NAME</label>
                            <input type="text" name="nickname" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>EMAIL ADDRESS</label>
                            <input type="email" name="email" onChange={handleChange}/>
                        </div>
                    </div>
                    <h3>CHANGE PASSWORD</h3>
                    <div className={styles.bottom}>
                        <div className={styles.field}>
                            <label>CURRENT PASSWORD</label>
                            <input type="text" name="current_password" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>NEW PASSWORD</label>
                            <input type="text" name="password" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>RE-TYPE NEW PASSWORD</label>
                            <input type="text" name="cofirm_password" onChange={handleChange}/>
                        </div>
                    </div>
                    <button>SAVE CHANGES</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default SettingsPage;