import styles from "./AdminMessageBox.module.css";

const AdminMessageBox = ({ isError, message }) => {
    return (
        <div className={ `${styles.container} ${isError ? styles.error : styles.success}`}>
            { message }
        </div>
    );
}

export default AdminMessageBox;