import styles from "./service-card.module.css";
import {useNavigate} from "react-router-dom";

const ServiceCard = ({background, heading, index}) => {

    const navigate = useNavigate();

    return (
        <div className={styles.card} onClick={() => navigate("/services/offer-details", {state:{index: index}})}>
            <img src={background} alt="background.png"/>
            <div>
                {heading}
            </div>
        </div>
    )
}

export default ServiceCard;