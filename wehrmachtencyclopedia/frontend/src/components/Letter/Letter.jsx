import styles from "./Letter.module.css";

import Row from "../Row";

const Letter = () => {
    return  (
        <div className={ styles["letter-container"] }>
            <h3 className={ styles.letter }>A</h3>
            <Row>
                <p className={ styles.word }>Lutwaffe:</p>
                <p className={ styles.desc }>Hava Kuvvetleri</p>
            </Row>
            <Row>
                <p className={ styles.word }>Anchluss:</p>
                <p className={ styles.desc }>Nazi Almanyasının Avusturya topraklarını kendisine katması. Avusturyayı ilhak etmesi</p>
            </Row>
            <Row>
                <p className={ styles.word }>sdjfhhjdshjkds gjksdfgıh:</p>
                <p className={ styles.desc }>Hava Kuvvetleri</p>
            </Row>
        </div>
    );
}

export default Letter;