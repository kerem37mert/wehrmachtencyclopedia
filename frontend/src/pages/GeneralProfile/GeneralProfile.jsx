import { useParams } from "react-router";

import Header from "../../components/Header";
import PageMeta from "../../components/PageMeta";
import Container from "../../components/Container";
import ProfileCard from "../../components/ProfileCard";

const GeneralProfile = () => {
    let { id } = useParams()

    return(
        <>
            <PageMeta title="Ana Sayfa" desc="ana sayfa" />
            <Header />
            <Container>
                <ProfileCard id={ id } />
            </Container>
        </>
    );
}

export default GeneralProfile;