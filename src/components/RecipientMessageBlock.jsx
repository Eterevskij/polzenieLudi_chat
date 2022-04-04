import { React } from 'react';
import { Row, Col } from 'antd';
import StatusMessage from './StatusMessage';
import RecipientMessage from './RecipientMessage';

const RecipientMessageBlock = (props) => {

    const {name, time, userPhoto, messages} = props;

    return (
        <div className="chat__chat__conversHistory__item left">
            <Row>

                <Col className="left__photo__wrapper">
                    <img className="left__photo" src={userPhoto} alt="" />
                </Col>

                <Col span={16} className="chat__chat__conversHistory__item__info" >
                    <p className="roleAndTime">{name}, {time}</p>

                    <span className="messages">
                        {messages.map(message => {

                            if(message.type === 'status') {
                                return <StatusMessage time={message.time}
                                                      name={message.name}
                                                      color={message.color}>{message.text}</StatusMessage>
                            } else if(message.type === 'message') {
                                return <RecipientMessage time={message.time}
                                                          name={message.name}>{message.text}</RecipientMessage>
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