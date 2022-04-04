import { React } from 'react';
import { Row, Col } from 'antd';
import StatusMessage from './StatusMessage';
import SenderMessage from './SenderMessage';

const RecipientMessageBlock = (props) => {

    const { name, time, messages } = props;

    return (
        <div className="chat__chat__conversHistory__item right">

            <Row justify="end">
                <Col span={12}>
                    <p className="roleAndTime">{name}, {time}</p>
                    <span className="messages">

                        {messages.map(message => {

                            if (message.type === 'status') {
                                return <StatusMessage time={message.time}
                                                      name={message.name}
                                                      color={message.color}>{message.text}</StatusMessage>
                            } else if (message.type === 'message') {
                                return <SenderMessage time={message.time}
                                                      name={message.name}>{message.text}</SenderMessage>
                            }

                        })
                        }
                    </span>

                </Col>
            </Row>
        </div>
    )
}

export default RecipientMessageBlock;