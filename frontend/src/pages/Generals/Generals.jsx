import Header from "../../components/Header";
import PageMeta from "../../components/PageMeta";
import Container from "../../components/Container";
import TabBar from "../../components/TabBar";

const Generals = () => {
    return (
        <>
            <PageMeta title="Ana Sayfa" desc="Generaller" />
            <Header />
            <Container>
                <TabBar />
            </Container>
        </>
    );
}

export default Generals;