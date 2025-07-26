import styles from "./GeneralList.module.css";
import GeneralListItem from "../components/GeneralListItem";

const GeneralList = ({ generals }) => {
    return (
        <div className={ styles["general-list"] }>
            {
                generals && generals.map(general => (
                    <GeneralListItem info={ general } key={ general.id } />
                ))
            }
        </div>
    );
}

export default GeneralList;