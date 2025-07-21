import styles from "./Header.module.css";

const Header = () => {
    return(
        <div className={ styles.header }>
            <h1 className={ styles.title } >WEHRMACHT ANSİKLOPEDİSİ</h1>
            <p className={ styles.subtitle } >Nazi ALmanyası Silahlı Kuvvetleri</p>
        </div>
    );
}

export default Header;