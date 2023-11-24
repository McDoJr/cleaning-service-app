import styles from "./services-booking.module.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {cards, scrollToTop, services} from "../../utils/utils.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "./service-card.jsx";

const ServicesBooking = ({index}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({hours: "", date: "", time: ""});
    const [selectedService, setSelectedService] = useState(services[index]);

    let otherServices = cards.filter((card) => card.name !== selectedService.heading);

    let {image1, heading, price, description, cleaner1Image, cleaner1Name, cleaner1Age,
        cleaner2Image, cleaner2Name, cleaner2Age, inclusions, exclusions} = selectedService;

    const handleClick = (index) => {
        const selectedNewService = services.filter(service => service.heading === otherServices[index].name)[0];
        setSelectedService(selectedNewService);
        scrollToTop();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {hours, date, time} = formData;
        if(hours && date && time) {
            const data = {hours, date, time, service: heading, price: price};
            navigate("/booking/booking-details", {state:{data: data}});
        }
        setFormData({hours: "", date: "", time: ""});
    }
    
    const aircon = 'AIRCON CLEANING SERVICE' === heading;

    return (
        <>
            <section className={styles.container}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} onClick={() => navigate("/services")}/>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <img src={image1} alt="cleaning.png"/>
                        <div>
                            <span>Transportation Fees</span>
                            <p>Please note that all website bookings are exclusive of transportation fees to and from our headquarters. We will charge transportation depending on your location.</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.row}>
                            <span>S.A.M Cleaning Services</span>
                            <h2>{heading}</h2>
                            <span>{`₱ ${price} per hour`}</span>
                        </div>
                        <div className={styles.row}>
                            <span>Description</span>
                            <span>{description}</span>
                        </div>
                        <form className={styles.form} style={
                            {flexDirection: aircon ? 'row' : 'column', flexWrap: 'wrap'}} onSubmit={handleSubmit}>
                            <div>
                                <label>Hour/s:</label>
                                <input type="number" name="hours" onChange={handleChange}/>
                                <label>Select Date:</label>
                                <input type="date" name="date" onChange={handleChange}/>
                            </div>
                            {aircon && (
                                <div>
                                    <label>Aircon Type:</label>
                                    <select>
                                        <option value="" hidden>Select Aircon Type</option>
                                        <option value="Window Type">Window Type</option>
                                        <option value="Split">Split</option>
                                        <option value="Standing - (Floor Mounted)">Standing - (Floor Mounted)</option>
                                    </select>
                                    <label>Quantity:</label>
                                    <input type="number"/>
                                </div>
                            )}
                            <div>
                                <label>Select Work Time:</label>
                                <input type="time" name="time" onChange={handleChange}/>
                            </div>
                            <button style={{marginLeft: aircon ? '120px' : '0'}}>BOOK NOW</button>
                        </form>
                    </div>
                </div>
                <div className={styles.cleaners}>
                    <h3>Cleaners</h3>
                    <div className={styles.square}>
                        <div className={styles.holder}>
                            <img src={cleaner1Image}/>
                            <div>
                                <span>Name: {cleaner1Name}</span>
                                <span>{`Age: ${cleaner1Age} years old`}</span>
                            </div>
                        </div>
                        <div className={styles.holder}>
                            <img src={cleaner2Image}/>
                            <div>
                                <span>Name: {cleaner2Name}</span>
                                <span>{`Age: ${cleaner2Age} years old`}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div>
                        <span>Inclusions:</span>
                        <p>Our SAM Cleaning Services includes the following:</p>
                        {inclusions.map((value, index) => <p key={index}>{value}</p>)}
                    </div>
                    <div>
                        <span>Exclusions:</span>
                        <p>The SAM Cleaning Services does not include:</p>
                        {exclusions.map((value, index) => <p key={index}>{value}</p>)}
                    </div>
                </div>
            </section>
            <div className={styles.bottom}>
                <h1>OTHER SERVICES OFFERED</h1>
                <div>
                    {otherServices.map(({heading, background}, index) => {
                        return <ServiceCard heading={heading} background={background} index={index} margin="50px 30px 0 30px" color="#D9D9D9" align="start" handleClick={handleClick} key={index}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default ServicesBooking;