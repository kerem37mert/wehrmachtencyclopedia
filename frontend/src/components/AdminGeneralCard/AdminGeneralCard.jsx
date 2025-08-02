import styles from "./AdminGeneralCard.module.css";

const AdminGeneralCard = ({ general }) => {
    return (
        <div className={ styles.card }>
            <div className={ styles["img-container"] }>
                <img src={ general.photo_url?.String } alt={ general.name?.String } />
            </div>
            <h2 className={ styles.title }>{ general.name?.String }</h2>
            <div className={ styles.buttons }>
                <div className={ styles.edit }>Düzenle</div>
                <div className={ styles.remove }>Sil</div>
            </div>
        </div>
    );
}

export default AdminGeneralCard;