import styles from "./AdminFormLabel.module.css";

const AdminFormLabel = ({ text }) => {
    return (
        <div className={ styles.label }>
            { text }
        </div>
    );
}

export default AdminFormLabel;