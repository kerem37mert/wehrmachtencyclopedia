import AdminContainer from "../../components/AdminContainer";
import {useParams} from "react-router";

const AdminEditGeneral = () => {

    const { id } = useParams()

    return (
        <>
            <AdminContainer>
                { id }
            </AdminContainer>
        </>
    );
}

export default AdminEditGeneral;