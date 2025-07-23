import { useEffect, useState} from "react";

import Header from "../../components/Header";
import Container from "../../components/Container";
import SubHeader from "../../components/SubHeader";
import Letter from "../../components/Letter/index.js";

const Dictionary = () => {

    const [terms, setTerms] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/dictionary", {
            method: "GET"
        })
            .then((res) => res.json())
            .then(data => {
                setTerms(data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <>
            <Header />
            <Container>
                <SubHeader title="Sözlük" />
                <Letter data={ terms } />
            </Container>
        </>
    );
}

export default Dictionary;