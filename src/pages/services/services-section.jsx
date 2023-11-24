import styles from "./services-section.module.css";
import ServiceCard from "./service-card.jsx";
import ServicesDetails from "./services-details.jsx";
import {useEffect, useState} from "react";
import {cards, scrollToTop} from "../../utils/utils.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const ServicesSection = () => {
    const navigate = useNavigate();

    const handleClick = (index) => {
        navigate("/services/offer-details", {state:{index: index}});
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.top}>
                    <h1>SERVICES</h1>
                </div>
                <div className={styles.box}>
                    {cards.map(({heading, background}, index) => {
                        return <ServiceCard heading={heading} background={background} index={index} margin="100px 60px 0 60px" color="#35C2CB" align="start" handleClick={handleClick} key={index}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default ServicesSection;