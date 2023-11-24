import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import ServicesDetails from "./services-details.jsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {loggedIn, scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import ServicesBooking from "./services-booking.jsx";

const ServicesOfferDetails = () => {

    const location = useLocation();

    useEffect(() => {
        setPageTitle("Services - Offer Details");
        scrollToTop();
    }, []);

    const index = location.state ? location.state.index : 0;

    return (
        <>
            <Header/>
            {loggedIn() ? <ServicesBooking index={index}/> : <ServicesDetails index={index}/>}
            <Footer/>
        </>
    )
}

export default ServicesOfferDetails;