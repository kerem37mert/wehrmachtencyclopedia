import styles from "./AdminFormInput.module.css";

const AdminFormInput = ({ onChange }) => {
    return (
        <input
            type={"text"}
            className={ styles.input }
            onChange={ onChange }
        />
    );
}

export default AdminFormInput;