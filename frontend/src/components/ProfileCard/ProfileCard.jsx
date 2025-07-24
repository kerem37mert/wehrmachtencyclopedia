import styles from "./ProfileCard.module.css";

const ProfileCard = ({ id }) => {
    return (
        <div className={ styles["profile-card"] }>
            <div className={ styles["profile-header"]}>
                <div className={ styles["image-container"] }>
                    <img src="/manstein.jpg" alt=""/>
                </div>
                <div className={ styles.summary }>
                    <h1 className={styles.title}>Erich Von Manstein</h1>
                    <div className={ styles["summary-list"] }>
                        <div className={ styles["summary-item-container"] }>
                            <p>Rütbe: Feldmareşal</p>
                            <p>Doğum Tarihi: 20 Kasım 1888</p>
                            <p>Ölüm Tarihi: 20 KAsım 1955</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ styles.desc }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto autem dicta dolorum fugit impedit ipsum iusto magnam magni nostrum officia pariatur perferendis quis quisquam totam unde, ut vitae voluptate? A autem dolor, ea fuga hic illo ipsam itaque numquam quae quas repellendus reprehenderit suscipit temporibus vel vitae voluptatibus voluptatum? Alias amet assumenda itaque libero nam nesciunt nobis praesentium quasi sit! A deserunt facilis ipsum, iusto saepe sequi voluptas voluptates.
            </div>
        </div>
    );
}

export default ProfileCard;