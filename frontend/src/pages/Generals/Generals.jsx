import Header from "../../components/Header";
import PageMeta from "../../components/PageMeta";
import Container from "../../components/Container";
import TabBar from "../../components/TabBar/index.js";
import { useState } from "react";

const Generals = () => {

    const [branchId, setBranchId] = useState(1);

    return (
        <>
            <PageMeta title="Ana Sayfa" desc="Generaller" />
            <Header />
            <Container>
                <TabBar active={ branchId } />
            </Container>
        </>
    );
}

export default Generals;