import styles from "./AdminContainer.module.css";
import AdminMenu from "../AdminMenu";

const AdminContainer = ({ children }) => {
    return (
        <div className={ styles.container }>
            <AdminMenu />
            <div className={ styles.content }>
                { children }
                <h1>sdfsdf</h1>
            </div>
        </div>
    );
}

export default AdminContainer;