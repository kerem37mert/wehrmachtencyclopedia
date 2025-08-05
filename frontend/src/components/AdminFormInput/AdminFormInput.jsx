import styles from "./AdminFormInput.module.css";

const AdminFormInput = ({ value, onChange }) => {
    return (
        <input
            type={"text"}
            className={ styles.input }
            value={ value }
            onChange={ onChange }
        />
    );
}

export default AdminFormInput;