import {useEffect, useState} from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ id }) => {

    const [general, setGeneral] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/api/general/${id}`,{
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setGeneral(data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className={ styles["profile-card"] }>
            <div className={ styles["profile-header"]}>
                <div className={ styles["image-container"] }>
                    <img src="/manstein.jpg" alt=""/>
                </div>
                <div className={ styles.summary }>
                    <h1 className={ styles.title }>{ general.name?.String }</h1>
                    <div className={ styles["summary-list"] }>
                        <div className={ styles["summary-item-container"] }>
                            <p>Rütbe: { general.rank?.String }</p>
                            <p>Doğum Tarihi: { general.birth_date?.Time }</p>
                            <p>Ölüm Tarihi: { general.death_date?.Time }</p>
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