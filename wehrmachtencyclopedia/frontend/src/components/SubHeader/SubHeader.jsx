import styles from "./Subheader.module.css";

const SubHeader = ({ title }) => {
    return (
        <div className={ styles.subHeader }>
            <h2 className={ styles.title }>{ title }</h2>
        </div>
    );
}

export default SubHeader;