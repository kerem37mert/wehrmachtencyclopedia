import styles from "./Letter.module.css";

import Row from "../Row";

const Letter = () => {
    return  (
        <div className={ styles["letter-container"] }>
            <h3 className={ styles.letter }>A</h3>
            <Row>
                <p className={ styles.term }>Lutwaffe:</p>
                <p className={ styles.defination }>Hava Kuvvetleri</p>
            </Row>
        </div>
    );
}

export default Letter;