import AdminContainer from "../../components/AdminContainer";
import { useParams } from "react-router";
import AdminHeader from "../../components/AdminHeader";
import AdminFormContainer from "../../components/AdminFormContainer";
import AdminFormInput from "../../components/AdminFormInput";
import AdminFormLabel from "../../components/AdminFormLabel";
import AdminFormText from "../../components/AdminFormText";

const AdminEditGeneral = () => {

    const { id } = useParams()

    return (
        <>
            <AdminContainer>
                <AdminHeader title="General Düzenle" />
                <AdminFormContainer>
                    <AdminFormLabel text="General İsmi" />
                    <AdminFormInput />
                    <AdminFormLabel text="General Rütbesi" />
                    <AdminFormInput />
                    <AdminFormLabel text="General Biyografisi" />
                    <AdminFormText />
                </AdminFormContainer>
            </AdminContainer>
        </>
    );
}

export default AdminEditGeneral;