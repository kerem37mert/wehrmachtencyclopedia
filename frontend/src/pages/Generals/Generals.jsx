import Header from "../../components/Header";
import PageMeta from "../../components/PageMeta";
import Container from "../../components/Container";
import TabBar from "../../components/TabBar/index.js";
import { useEffect, useState } from "react";

const Generals = () => {

    const [branchId, setBranchId] = useState(1);
    const [generals, setGenerals] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/generals-for-branch/${branchId}`)
            .then(res => res.json())
            .then(data => setGenerals(data))
            .catch(err => console.log(err));
    }, [branchId]);

    return (
        <>
            <PageMeta title="Ana Sayfa" desc="Generaller" />
            <Header />
            <Container>
                <TabBar active={ branchId } onChange={(newId) => setBranchId(newId)} />
                {
                    generals && generals.map(general => (
                        <div key={ general.id }>{ general.name?.String }</div>
                    ))
                }
            </Container>
        </>
    );
}

export default Generals;