import styles from "./sign-up-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const SignUpPage = ({handleAddUser}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({firstname: "", lastname: "", email: "", password: "", confirm_password: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        const {firstname, lastname, email, password, confirm_password} = formData;
        if(firstname && lastname && email && password && confirm_password) {
            handleAddUser({uuid: crypto.randomUUID(), firstname, lastname, nickname: "", email, password, address: "", city: "", state: "", zipcode: "", country: "", bookings: []});
            navigate("/");
        }
        setFormData({firstname: "", lastname: "", email: "", password: "", confirm_password: ""});
    }

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <h1>Already have an account? <Link to="/signin">Log-in here!</Link></h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Create Account</h2>
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="Enter your first name *" onChange={handleChange}/>
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Enter your last name *" onChange={handleChange}/>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter your email address *" onChange={handleChange}/>
                    <label>Create Password</label>
                    <input type="password" name="password" placeholder="Enter your desired password *" onChange={handleChange}/>
                    <label>Confirm Password</label>
                    <input type="password" name="confirm_password" placeholder="Confirm your password *" onChange={handleChange}/>
                    <button>Create Account</button>
                    <button>Sign up using Google</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default SignUpPage;