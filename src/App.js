import { React } from 'react';
import { Row, Col, Button, Select, Tag } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { ArrowLeftOutlined, PhoneFilled, ClockCircleOutlined, PaperClipOutlined, SmileOutlined, CheckCircleFilled } from '@ant-design/icons';

import MessageDate from './components/MessageDate';
import RecipientMessageBlock from './components/RecipientMessageBlock';
import SenderMessageBlock from './components/SenderMessageBlock';


import search from './icons/search.svg';
import send from './icons/send.svg';
import user from './img/userPhoto.jpg';
import phone from './icons/phone.svg';
import email from './icons/email.svg';
import TextArea from 'antd/lib/input/TextArea';


const TagCircle = () => {
  return (
    <div className="tagCircle"></div>
  )
}

function App() {

  const { Option } = Select;

  return (

    <div className="App">

      <div className="container">
        <div className="chat">
          <Row className="chat__backAndStatus" >
            <Col span={10}>
              <Row>
                <Col className="chat__backAndStatus__item back">
                  <ArrowLeftOutlined />
                  <p>Вернуться к списку заявок</p>
                </Col>

                <Col className="chat__backAndStatus__item status">
                  <div className="chat__backAndStatus__item__circle"></div>
                  <p>Доступно в работу</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <p className="chat__orderNum">Заявка – ID 492932320</p>

          <div className="chat__selectPart">
            <a className="chat__selectPart__item">Общая информация</a>
            <a className="chat__selectPart__item">Документы</a>
            <a className="chat__selectPart__item active">Чат с риэлтором</a>
          </div>

          <Row gutter={32} className='chatAndBorrowerInfo'>

            

            <Col span={16}>

              <div className="wrapper_fjsi">
                


              <div className="chat__chat">

              <div className="headerAndDiv">

                <div className="chat__chat__header">
                  <Row gutter={16}>
                    <Col span={16}>
                      <div className="chat__chat__header__search">
                        <input type="text"placeholder='Поиск сообщений' className="chat__chat__header__search__input" />
                        <img className="chat__chat__header__search__icon" src={search} alt="" />
                      </div>
                    </Col>

                    <Col span={8}>
                      <div className="chat__chat__header__select__wrapper">
                        <Select className="chat__chat__header__select" defaultValue="AllMessages">
                          <Option value="AllMessages">Все сообщения</Option>
                          <Option value="AllMessages2">Все сообщения2</Option>
                          <Option value="AllMessages3">Все сообщения3</Option>
                        </Select>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="chat__chat__conversHistory">
        
                  <MessageDate>24 декабря 2021</MessageDate>
                  <RecipientMessageBlock name='Риэлтор' time='19:24' userPhoto={user} messages = {[{ type: 'status', color: 'green', text: 'Заявка создана' }, { type: 'message', text: 'ID 492932320' }]} />
                  
                  <MessageDate>25 декабря 2021</MessageDate>
                  <SenderMessageBlock name='Вы' time='11:45' messages = {[{ type: 'status', color: 'orange', text: 'На проверке' }, { type: 'status', color: 'red', text: 'На корректировку', time: '13:41', name: 'Вы'}, { type: 'message', text: 'Добавьте пожалуйста больше фотографий объекта оценки с разных ракурсов' }]} />
                  
                  <MessageDate>26 декабря 2021</MessageDate>
                  <RecipientMessageBlock name='Риэлтор' time='19:24' userPhoto={user} messages = {[{ type: 'status', color: 'orange', text: 'На проверке' }, { type: 'message', text: 'Добавил фото, проверяйте поскорее и отправляйте уже вашему равшану в работу, время деньги.'}]} />

                  <MessageDate>27 декабря 2021</MessageDate>
                  <SenderMessageBlock name='Вы' time='18:15' messages = {[{ type: 'status', color: 'blue', text: 'Отправлена оценщику' }]} />

                  <MessageDate>28 декабря 2021</MessageDate>
                  <RecipientMessageBlock name='Оценщик' time='19:24' userPhoto={user} messages = {[{ type: 'status', color: 'blue', text: 'В работе' }, { type: 'message', text: 'Добавил фото, проверяйте поскорее и отправляйте уже вашему равшану в работу, время деньги.' }]} />

                </div>

                </div>
                <Col className="chat__chat__inputField__wrapper active">
                  <Row wrap={false} className='chat__chat__inputField' align='center'justify="space-between">
                    <Col className="chat__chat__inputField__input__wrapper" flex={true}>
                      <TextArea type="text" placeholder='Написать сообщение...' className="chat__chat__inputField__input" />
                    </Col>

                    <Col>
                      <div className="chat__chat__inputField__buttons">
                        <div className="chat__chat__inputField__buttons__item"><PaperClipOutlined /></div>
                        <div className="chat__chat__inputField__buttons__item"><SmileOutlined /></div>
                        <div className="chat__chat__inputField__buttons__item send active"><img src={send} alt="" /></div>
                      </div>
                    </Col>
                  </Row>

                  <div className="chat__chat__inputField__tags">
                    <Tag closable icon={<TagCircle />}>На корректировку</Tag>
                  </div>

                </Col>
                </div>
                </div>




            </Col>


            <Col span={8}>
              
              <div className="chat__borrowerInfo">
                <p className="chat__borrowerInfo__role">Заёмщик</p>
                <p className="chat__borrowerInfo__name">Васечкин Иван Андреевич</p>

                <span className="chat__borrowerInfo__phoneWrapper">
                  <p className="chat__borrowerInfo__phone__text">+7 (960) 468-40-73</p>
                  <img className="chat__borrowerInfo__phone__icon" src={phone} />
                </span>

                <div className="chat__borrowerInfo__line"></div>

                <div className="chat__borrowerInfo__photoNameRoleWrapper">
                  <Row>
                    <Col className='chat__borrowerInfo__photoNameRoleWrapper__left'>
                      <img src={user} alt="" />
                    </Col>

                    <Col className='chat__borrowerInfo__photoNameRoleWrapper__right'>
                      <p className="chat__borrowerInfo__photoNameRoleWrapper__right__role">Риэлтор</p>
                      <p className="chat__borrowerInfo__photoNameRoleWrapper__right__name">Гущин Данил Андреевич</p>
                    </Col>
                  </Row>
                </div>

                <span className="chat__borrowerInfo__phoneWrapper">
                  <p className="chat__borrowerInfo__phone__text">+7 (960) 468-40-73</p>
                  <img className="chat__borrowerInfo__phone__icon" src={phone} alt="" />
                </span>

                <span className="chat__borrowerInfo__emailWrapper">
                  <p className="chat__borrowerInfo__email__text">danilgushchin1@gmail.com</p>
                  <img className="chat__borrowerInfo__email__icon" src={email} alt="" />
                </span>

                <div className="chat__borrowerInfo__line"></div>

                <Button disabled={false} className="chat__borrowerInfo__button send">Отправить оценщику</Button>
                <Button disabled={true} className="chat__borrowerInfo__button return">Вернуть на доработку</Button>
                <Button disabled={true} className="chat__borrowerInfo__button correction" icon={<ClockCircleOutlined />}>На корректировке</Button>
                <Button className="chat__borrowerInfo__button success" icon={<CheckCircleFilled />}>Отправлена оценщику</Button>
              </div>

            </Col>

          </Row>

        </div>
      </div>

    </div>
  );
}

export default App;
