import styles from "./AdminFormContainer.module.css";

const AdminFormContainer = ({ children }) => {
    return(
        <div className={ styles.container }>
            { children }
        </div>
    );
}

export default AdminFormContainer;