import styles from "./service-card.module.css";

const ServiceCard = ({background, heading, index, handleClick, margin, color, align}) => {

    return (
        <div className={styles.card} style={{margin: margin}} onClick={() => handleClick(index)}>
            <img src={background} alt="background.png"/>
            <div style={{backgroundColor: color, alignItems: align}}>
                {heading}
            </div>
        </div>
    )
}

export default ServiceCard;