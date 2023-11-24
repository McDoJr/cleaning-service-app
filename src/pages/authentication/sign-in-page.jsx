import styles from "./sign-in-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {accountVerified} from "../../utils/utils.jsx";

const SignInPage = ({users, handleLogin}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({emailInput: "", passwordInput: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = (e) => {
        const {emailInput, passwordInput} = formData;
        const user = users.filter(user => user.email === emailInput && user.password === passwordInput)[0];
        if(accountVerified(emailInput, passwordInput) || user){
            handleLogin(user ? user : {nickname: "Admin", bookings: []});
            navigate("/");
        }
        setFormData({email: "", password: ""});
    }

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <label>Email</label>
                    <input type="text" name="emailInput" placeholder="Enter your email address *" onChange={handleChange}/>
                    <label>Password</label>
                    <input type="password" name="passwordInput" placeholder="Enter your password *" onChange={handleChange}/>
                    <button>SIGN IN</button>
                    <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default SignInPage;