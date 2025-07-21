import Header from "../../components/Header";
import Container from "../../components/Container";
import SubHeader from "../../components/SubHeader";
import Letter from "../../components/Letter/index.js";

const Dictionary = () => {
    return (
        <>
            <Header />
            <Container>
                <SubHeader title="Sözlük" />
                <Letter />
                <Letter />
            </Container>
        </>
    );
}

export default Dictionary;