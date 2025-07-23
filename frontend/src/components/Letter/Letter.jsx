import styles from "./Letter.module.css";

import Row from "../Row";

const Letter = ({ data }) => {
    return  (
        <div className={ styles["letter-container"] }>
            <h3 className={ styles.letter }>A</h3>
            {
                data.map(item => (
                    <Row>
                        <p className={ styles.term }>{ item.term }:</p>
                        <p className={ styles.defination }>{ item.defination }</p>
                    </Row>
                ))
            }
        </div>
    );
}

export default Letter;