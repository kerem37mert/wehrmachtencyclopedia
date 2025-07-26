import styles from "./GeneralListItem.module.css";
import { Link } from "react-router";

const GeneralListItem = ({ info }) => {
    return (
        <Link to={`/general-profil/${info.id}`} className={ styles.item }>
            {info.rank.String} {info.name.String}
        </Link>
    );
}

export default GeneralListItem;