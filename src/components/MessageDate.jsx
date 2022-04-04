import { React } from 'react';

const MessageDate = (props) => {
    return (
        <div className="chat__chat__conversHistory__item date">
          <p>{props.children}</p>
          <div className="chat__chat__conversHistory__item__dateLine"></div>
        </div>
    )
}

export default MessageDate;