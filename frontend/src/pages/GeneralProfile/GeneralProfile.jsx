import { useParams } from "react-router";

import Header from "../../components/Header";
import PageMeta from "../../components/PageMeta/index.js";

const GeneralProfile = () => {
    let { id } = useParams()

    return(
        <>
            <PageMeta title="Ana Sayfa" desc="ana sayfa" />
            <Header />
            { id }
        </>
    );
}

export default GeneralProfile;