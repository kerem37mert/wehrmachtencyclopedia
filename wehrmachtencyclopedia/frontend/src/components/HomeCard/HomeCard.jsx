import styles from "./HomeCard.module.css";
import { Link } from "react-router";

const HomeCard = ({ title, to }) => {
    return (
        <Link className={ styles["home-card"] }  to={ to }>
            { title }
        </Link>
    );
}

export default HomeCard;