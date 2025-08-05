import styles from "./AdminFormButton.module.css";

const AdminFormButton = ({ text }) => {
    return(
        <div className={ styles.container }>
            <button className={ styles.button }>{ text }</button>
        </div>
    );
}

export default AdminFormButton;