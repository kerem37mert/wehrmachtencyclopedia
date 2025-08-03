import styles from "./AdminGeneralCard.module.css";
import { useNavigate } from "react-router";

const AdminGeneralCard = ({ general, onDelete }) => {

    const navigate = useNavigate();

    const removeHandler = (id) => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/remove-general/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("user")}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.success)
                    onDelete(id)
                else
                    console.log(data.error)
            })
            .catch(err => console.log(err));
    }

    const editHandler = (id) => {
        navigate(`/admin/general-duzenle/${id}`, {})
    }

    return (
        <div className={ styles.card }>
            <div className={ styles["img-container"] }>
                <img src={ general.photo_url?.String } alt={ general.name?.String } />
            </div>
            <h2 className={ styles.title }>{ general.name?.String }</h2>
            <div className={ styles.buttons }>
                <div
                    className={ styles.edit }
                    onClick={ () => editHandler(general.id) }
                >
                    Düzenle
                </div>
                <div
                    className={ styles.remove }
                    onClick={ () => removeHandler(general.id) }
                >
                    Sil
                </div>
            </div>
        </div>
    );
}

export default AdminGeneralCard;