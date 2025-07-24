import Header from "../../components/Header"
import Container from "../../components/Container";
import Row from "../../components/Row";
import HomeCard from "../../components/HomeCard";
import Footer from "../../components/Footer";
import PageMeta from "../../components/PageMeta";

const Home = () => {
    return (
        <>
            <PageMeta title="Ana Sayfa" desc="ana sayfa" />
            <Header />
            <Container>
                <Row>
                    <HomeCard
                        title="Wehrmacht Sözlüğü"
                        to="sozluk"
                    />
                    <HomeCard
                        title="Yazılar"
                        to="yazilar"
                    />
                    <HomeCard
                        title="Generaller"
                        to="generaller"
                    />
                    <HomeCard
                        title="Haritalar"
                        to="haritalars"
                    />"
                </Row>
                <Row>
                    <HomeCard
                        title="Kara Kuvvetleri"
                        to="kara-kuvvetleri"
                    />
                    <HomeCard
                        title="Hava Kuvvetleri"
                        to="hava-kuvvetleri"
                    />
                    <HomeCard
                        title="Deniz Kuvvetleri"
                        to="deniz-kuvvetleri"
                    />
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Home;