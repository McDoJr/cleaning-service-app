import styles from "./services-section.module.css";
import ServiceCard from "../../components/service-card.jsx";
import {useNavigate} from "react-router-dom";

const ServicesSection = () => {

    const navigate = useNavigate();

    const cards = [
        {
            heading: (
                <>
                    <h2>Deep Cleaning</h2>
                    <span>per hour</span>
                    <h3>Php 1,500.00</h3>
                </>
            ),
            background: require("../../images/deep_cleaning.png")},
        {
            heading: (
                <>
                    <h2>Aircon Cleaning</h2>
                    <span>per hour</span>
                    <h3>Php 975.00</h3>
                </>
            ),
            background: require("../../images/aircon_cleaning.png")},
        {
            heading: (
                <>
                    <h2>Basic Cleaning</h2>
                    <span>per hour</span>
                    <h3>Php 750.00</h3>
                </>
            ),
            background: require("../../images/basic_cleaning.png")},
        {
            heading: (
                <>
                    <h2>Laundry Service</h2>
                    <span>per hour</span>
                    <h3>Php 600.00</h3>
                </>
            ),
            background: require("../../images/laundry_services.png")}
    ];

    return (
        <section className={styles.container}>
            <h1>OUR SERVICES</h1>
            <div className={styles.box}>
                {cards.map(({heading, background}, index) => {
                    return <ServiceCard heading={heading} background={background} index={index} key={index}/>
                })}
            </div>
            <button onClick={() => navigate("/services")}>Show More</button>
        </section>
    )
}

export default ServicesSection;