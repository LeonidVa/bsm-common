import React, {Component} from 'react'
import Link from 'next/link';
import 'components/contacts/style.scss'

import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';

import Title from 'components/common/Title'
import MapBlock from 'components/common/MapBlock';
import OrderForm from 'components/common/OrderForm'
import LinksBlock from 'components/common/LinksBlock'
import formConfig from 'components/config/formConfig';
import links from 'components/config/linksBlockConfig';
import schemaSrc from 'static/images/contacts/how-to-go.jpg';
import Address from 'components/contacts/Address'
import {ToggleCallPopup, ToggleQuestionPopup} from "components/modals/Call"


class page extends Component {
    render() {
        return (
            <Wrapper title="BeSmarter - Контакты">
                <div className="wrapper bg bg-c2 bg-img bg-img5">
                    <Title>Контакты</Title>

                    <section className="breadcrumbs">
                        <div className="inner">
                            <Link href="/">
                                <a>Главная</a>
                            </Link>
                            <span> / </span>
                            <Link href="/contacts">
                                <a>Контакты</a>
                            </Link>
                        </div>
                    </section>

                    <section className="block-nav">
                        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
                    </section>

                    <section className="block-text">
                        <h2 className="block-text__title">
                            Офис
                        </h2>
                        <p className="block-text__subtitle subtitle-orange">
                            Москва, Большой Кисловский переулок, д. 1, стр. 2, офис 211
                        </p>
                        <p className="block-text__par">
                            Понедельник - пятница <span className="bold">с 10:00 до 19:30</span><br/>
                            Суббота, воскресенье <span className="bold">с 10:00 до 18:30</span>
                        </p>
                        <p className="block-text__par finish-text">
                            Приходите – мы ждём Вас!
                        </p>

                        <h2 className="block-text__title">
                            Телефон
                        </h2>
                        <p className="block-text__subtitle subtitle-orange">
                            <span className="phone">+7 (495) 772-40-90</span>
                            <span className="phone">+7 (495) 772-90-40</span>
                        </p>
                        <p className="block-text__par">
                            Понедельник - пятница <span className="bold">с 10:00 до 19:30</span><br/>
                            Суббота, воскресенье <span className="bold">с 10:00 до 18:30</span>
                        </p>
                        <p className="block-text__par finish-text">
                            Звоните – будем рады поговорить!
                        </p>
                        <h2 className="block-text__title">
                            Почта
                        </h2>
                        <p className="block-text__subtitle subtitle-orange">
                            <a href="mailto:zakaz@besmarter.ru?subject=Новая заявка" style={{color: "#f4511e"}}>zakaz@besmarter.ru</a>
                        </p>
                        <p className="block-text__par">
                            Возникли вопросы?
                        </p>
                        <p className="block-text__par finish-text">
                            Пишите – ответим!
                        </p>
                        <div className="block-callask__buttons">
                            <ToggleQuestionPopup><a className="block-callask__button">Задать вопрос</a></ToggleQuestionPopup>
                            <ToggleCallPopup><a className="block-callask__button">Заказать звонок</a></ToggleCallPopup>
                        </div>
                    </section>

                    <MapBlock/>
                    <section className="block-text">
                        <h2 className="block-text__title">
                            Как пройти
                        </h2>
                        <Address
                            handleMaps={this.handleMaps}
                            metro="м. Арбатская"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                        >
                            <p className="block-text__par">
                                Выход к кинотеатру «Художественный».
                            </p>
                            <p className="block-text__par">
                                Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="block-text__par">
                                На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="block-text__par">
                                Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="block-text__par">Рады видеть Вас!</p>

                        </Address>
                        <Address
                            metro="м. Александровский сад"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                        >

                            <p className="block-text__par">Выход на ул. Воздвиженка.
                            </p>
                            <p className="block-text__par">Из метро налево по ул. Воздвиженка в подземный переход напротив «Детского мира».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="block-text__par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="block-text__par">Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="block-text__par">Рады видеть Вас!
                            </p>
                        </Address>
                        <Address
                            metro="м. Библиотека им. Ленина"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                        >

                            <p className="block-text__par">Идём по указателям «Выход в город на ул. Воздвиженка».

                            </p>
                            <p className="block-text__par">Из стеклянных дверей метро по подземному переходу вперед до упора и наверх.
                                Вы на Воздвиженке: сзади Кремль, слева Библиотека, впереди «Детский мир».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="block-text__par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="block-text__par">Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="block-text__par">Рады видеть Вас!
                            </p>
                        </Address>
                        <Address
                            metro="м. Боровицкая"
                            schema={schemaSrc}
                            time="8 минут"
                            distance="690 метров"
                        >

                            <p className="block-text__par">В метро переходим на станцию Арбатская.
                                Выход к кинотеатру «Художественный»
                            </p>
                            <p className="block-text__par">Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="block-text__par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="block-text__par">Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="block-text__par">Рады видеть Вас!
                            </p>
                        </Address>
                    </section>

                    <section className="block-service">
                        <Link href="/diplom-na-zakaz">
                            <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/g.jpg') + ")",}}>
                                <div className="block-service__text gradient-l-white">
                                    <span className="block-service__title">Удобный офис</span>
                                    <p className="block-service__par">Всегда на связи 8:00 – 22:00</p>
                                    <p className="block-service__par">Работаем в выходные и праздники</p>
                                    <p className="block-service__par">Уютный офис в Центре</p>
                                    <p className="block-service__par">4 линии метро</p>
                                    <p className="block-service__par">Всего 5 минут пешком от метро</p>
                                </div>
                            </a>
                        </Link>
                    </section>

                    <OrderForm title="Заказать работу" formConfig={formConfig}/>
                    <LinksBlock links={links}/>
                </div>
            </Wrapper>
        )
    }
}


export default page
