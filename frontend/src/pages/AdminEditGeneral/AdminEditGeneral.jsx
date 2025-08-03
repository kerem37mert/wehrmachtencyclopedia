import AdminContainer from "../../components/AdminContainer";
import {useParams} from "react-router";
import AdminHeader from "../../components/AdminHeader";
import AdminFormContainer from "../../components/AdminFormContainer";

const AdminEditGeneral = () => {

    const { id } = useParams()

    return (
        <>
            <AdminContainer>
                <AdminHeader title="General Düzenle" />
                <AdminFormContainer>
                    { id }
                </AdminFormContainer>
            </AdminContainer>
        </>
    );
}

export default AdminEditGeneral;