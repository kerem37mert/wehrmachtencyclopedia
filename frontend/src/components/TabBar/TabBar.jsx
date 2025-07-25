import styles from "./TabBar.module.css"

const TabBar = () => {
    return (
        <div className={ styles["tab-bar"] }>
            <a className={ styles["tab-bar-item"] + " " + styles.active } href="">Lutwaffe</a>
            <a className={ styles["tab-bar-item"] } href="">Heer</a>
            <a className={ styles["tab-bar-item"] } href="">Kriegsmarine</a>
        </div>
    );
}

export default TabBar;