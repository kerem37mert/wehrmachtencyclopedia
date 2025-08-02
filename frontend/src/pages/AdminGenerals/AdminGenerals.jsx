import AdminContainer from "../../components/AdminContainer";
import AdminHeader from "../../components/AdminHeader";
import AdminGeneralList from "../../components/AdminGeneralList";

const AdminGenerals = () => {
    return (
        <>
            <AdminContainer>
                <AdminHeader title="Generaller" />
                <AdminGeneralList />
            </AdminContainer>
        </>
    );
}

export default AdminGenerals;