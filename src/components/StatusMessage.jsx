import { React } from 'react';

const StatusMessage = (props) => {
    const { color, time, name } = props; 
    const text = props.children;

    return (
        <>

            <span className={`messages__item status ${time && 'hasDate'}`}>

                {time && <p class="roleAndTime">{name}, {time}</p>}
                <p className={`chat__chat__conversHistory__item__status ${color}`}>{text}</p>
            </span>
        </>
    )
}

export default StatusMessage;