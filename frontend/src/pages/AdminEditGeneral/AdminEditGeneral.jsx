import AdminContainer from "../../components/AdminContainer";
import { useParams } from "react-router";
import AdminHeader from "../../components/AdminHeader";
import AdminFormContainer from "../../components/AdminFormContainer";
import AdminFormInput from "../../components/AdminFormInput";
import AdminFormLabel from "../../components/AdminFormLabel";
import AdminFormText from "../../components/AdminFormText";
import AdminFormButton from "../../components/AdminFormButton/index.js";
import {useEffect, useState} from "react";

const AdminEditGeneral = () => {

    const { id } = useParams()
    const [general, setGeneral] = useState({});

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/general/${id}`)
            .then(res => res.json())
            .then(data => setGeneral(data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <>
            <AdminContainer>
                <AdminHeader title="General Düzenle" />
                <AdminFormContainer>
                    <AdminFormLabel text="General İsmi" />
                    <AdminFormInput value={ general.name?.String } />
                    <AdminFormLabel text="General Rütbesi" />
                    <AdminFormInput value={ general.rank?.String } />
                    <AdminFormLabel text="General Biyografisi" />
                    <AdminFormText value={ general.bio?.String } />
                    <AdminFormButton text="Güncelle" />
                </AdminFormContainer>
            </AdminContainer>
        </>
    );
}

export default AdminEditGeneral;