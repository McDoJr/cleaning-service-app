import styles from "./booking-details-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.jsx";

const BookingDetailsPage = ({handleBookings}) => {

    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [formData, setFormData] = useState({address: "", city: "", state: "", zipcode: "", country: ""});

    useEffect(() => {
        setPageTitle("Booking Details");
        scrollToTop();
        setData(location.state.data);
    }, []);

    const {hours, date, time, service, price} = data;
    const total = new Intl.NumberFormat().format(parseFloat(price) * parseFloat(hours));

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingData = {service, hours, date, time, price, total};
        handleBookings(bookingData);
        setFormData({address: "", city: "", state: "", zipcode: "", country: ""});
        navigate("/");
    }

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <h1>Booking Details > <a>Payment</a></h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Address Details</h2>
                    <div className={styles.top}>
                        <div className={styles.field}>
                            <label>ADDRESS</label>
                            <input type="text" name="address" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>CITY</label>
                            <input type="text" name="city" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>STATE</label>
                            <input type="text" name="state" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>ZIP CODE</label>
                            <input type="number" name="zipcode" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>COUNTRY</label>
                            <input type="text" name="country" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <h2>Booking Details</h2>
                        <h3>{service}</h3>
                        <div>
                            <span>{`Hour/s: ${hours} Hour`}</span>
                            <span>{`Select Date: ${date}`}</span>
                            <span>{`Select Work Time: ${time}`}</span>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <h2>Payment Details</h2>
                        <div className={styles.box}>
                            <div>
                                <span>Service:</span>
                                <span>{service}</span>
                            </div>
                            <div>
                                <span>{`Price x Hour/s`}</span>
                                <span>{`₱ ${price} x 1 Hour`}</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>{`₱ ${total}.00`}</span>
                            </div>
                        </div>
                    </div>
                    <button>Proceed to Payment</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default BookingDetailsPage;