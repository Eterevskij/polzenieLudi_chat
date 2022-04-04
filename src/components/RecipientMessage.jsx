import { React } from 'react';

const SenderMessage = (props) => {
    const text = props.children;
    const {time, name} = props;

    return (
        <> 
            {time && <p className={`roleAndTime ${time && 'hasDate'}`}>{name}, {time}</p>}
            <span className={`messages__item message ${time && 'hasDate'}`}>
                <p>{text}</p>
            </span>
        </>
    )
}

export default SenderMessage;