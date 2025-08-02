import styles from "./AdminHeader.module.css";

const AdminHeader = ({ title }) => {
    return (
        <div className={ styles.header }>
            <h1 className={ styles.title }>{ title }</h1>
        </div>
    );
}

export default AdminHeader;