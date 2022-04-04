import { React } from 'react';
import verticalDots from '../icons/verticalDots.svg';

const SenderMessage = (props) => {
    const text = props.children;
    const {time, name} = props;

    return (
        <>
            {time && <p class="roleAndTime hasDate">{name}, {time}</p>}
            <div className={`message messages__item ${time && 'hasDate'} `}>
                <p>{text}</p>
                <span className="message__iconWrapper">
                    <img src={verticalDots} alt="" />
                </span>
                
            </div>
        </>
    )
}

export default SenderMessage;