import AdminContainer from "../../components/AdminContainer";
import { useParams } from "react-router";
import AdminHeader from "../../components/AdminHeader";
import AdminFormContainer from "../../components/AdminFormContainer";
import AdminFormInput from "../../components/AdminFormInput";
import AdminFormLabel from "../../components/AdminFormLabel";
import AdminFormText from "../../components/AdminFormText";
import AdminFormButton from "../../components/AdminFormButton/index.js";
import { useEffect, useState } from "react";
import AdminMessageBox from "../../components/AdminMessageBox/index.js";

const AdminEditGeneral = () => {

    const { id } = useParams()
    const [general, setGeneral] = useState({});
    const [result, setResult] = useState({});

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/general/${id}`)
            .then(res => res.json())
            .then(data => setGeneral(data))
            .catch(err => console.log(err));
    }, [id]);

    const updateField = (field, value) => {
        setGeneral((prev) => ({
            ...prev,
            [field]: {
                String: value,
                Valid: value.trim() !== "",
            },
        }));

        console.log(general);
    }

    const updateHandler = () => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/update-general/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("user")}`,
            },
            body: JSON.stringify(general),
        })
            .then(res => res.json())
            .then(data => setResult(data))
            .catch(err => console.log(err));
    }

    return (
        <>
            <AdminContainer>
                <AdminHeader title="General Düzenle" />
                <AdminFormContainer>
                    <AdminFormLabel text="General İsmi" />
                    <AdminFormInput value={ general.name?.String } onChange={ (e) => updateField("name", e.target.value) } />
                    <AdminFormLabel text="General Rütbesi" />
                    <AdminFormInput value={ general.rank?.String } onChange={ (e) => updateField("rank", e.target.value) } />
                    <AdminFormLabel text="General Biyografisi" />
                    <AdminFormText value={ general.bio?.String } onChange={ (e) => updateField("bio", e) } />
                    <AdminFormButton text="Güncelle" onClick={ updateHandler } />
                    {
                        result.success && <AdminMessageBox isError={ !result.success } message={ result.success ? "Güncelleme Başarılı" : result.error } />
                    }
                </AdminFormContainer>
            </AdminContainer>
        </>
    );
}

export default AdminEditGeneral;