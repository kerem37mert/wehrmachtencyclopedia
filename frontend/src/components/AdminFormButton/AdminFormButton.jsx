import styles from "./AdminFormButton.module.css";

const AdminFormButton = ({ text, onClick }) => {
    return(
        <div className={ styles.container }>
            <button className={ styles.button } onClick={ onClick }>{ text }</button>
        </div>
    );
}

export default AdminFormButton;