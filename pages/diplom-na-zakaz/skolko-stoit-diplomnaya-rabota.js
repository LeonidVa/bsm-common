import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'


const page = () => (
    <Wrapper title="Сколько стоит написать диплом – стоимость дипломной работы в компании «BeSmarter!» - 8900 рублей, закажите сейчас - тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/diplom-na-zakaz">
                        <a>Дипломная работа</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Сколько стоит</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Дипломная работа</span>
                            <p className="block-service__par">Быстро и качественно!</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 14 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Дипломный проект</span>
                            <p>от 21 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Магистерская диссертация</span>
                            <p>от 23 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диплом MBA</span>
                            <p>от <b>25 000</b> руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Материалы для успешной защиты</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">Доступные цены</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Сколько стоит дипломная работа
                </h2>
                <p className="block-text__par">
                    Сколько стоит дипломная работа? Для человека, который выполнил ее сам, – она бесценна, поскольку было потрачено личное время, нервы и силы. Но если поручить написать дипломную работу, стоимость ее приобретает вполне реальное цифровое значение. Причем иногда такой вариант даже предпочтительнее, особенно, если времени до защиты почти не осталось.
                </p>
                <p className="block-text__par">
                    Давайте выясним, сколько стоит дипломная работа на заказ. И какими факторами определяется ее цена.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит стоимость написания дипломной работы
                </h2>
                <ul>
                    <li>
                        <b>Дисциплина.</b> Расценки на работы по гуманитарным дисциплинам в среднем ниже в сравнении с тем, сколько стоит сделать диплом по технической специальности. Это связанно с повышенной сложностью из-за наличия расчетов, чертежей, графиков и т. д.
                    </li>
                    <li>
                        <b>Тема.</b> Даже в рамках одной специальности стоимость написания дипломной работы может значительно варьироваться в зависимости от конкретной темы. Поэтому, при наличии выбора, желательно проконсультироваться с исполнителем.
                    </li>
                    <li>
                        <b>Время.</b> Стоимость дипломной работы существенно возрастает, если сроки ее выполнения сужаются. Это обуславливается необходимостью сверхурочной работы и привлечением дополнительных авторов.
                    </li>
                </ul>
            </section>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на пакет <br/> «Успешная Защита»
                </h2>
                <CallMeFormWithTimer timerDuration={155555}>
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Сколько стоит написать дипломную работу
                </h2>
                <p className="block-text__par">
                    А теперь проиллюстрируем сколько стоит написать диплом на примере прайс-листа компании BeSmarter!
                </p>
                <p className="block-text__par">
                    Стоимость дипломных работ по гуманитарным дисциплине? От 9000 рублей при наличии только теоретической части, и от 14000 – с практической частью.
                </p>
                <p className="block-text__par">
                    Цена дипломных работ по технической дисциплине примерно в 2 раза дороже – от 22000 рублей.
                </p>
                <p className="block-text__par">
                    Цена написания дипломной работы на иностранном языке увеличивается в 1,5-2 раза.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Алгоритм сотрудничества
                </h2>
                <p className="block-text__par">
                    Вы оформляете заявку одним из перечисленных ниже способов, и мы проводим собеседование – лично, по телефону или в онлайн-режиме. По его результатам составляется договор, в котором прописывается, сколько будет стоит написать дипломную работу, сроки его сдачи заказчику, а также все предъявляемые к работе требования, включая обязательства о неразглашении данных.
                </p>
                <p className="block-text__par">
                    Далее после 50%-ной предоплаты согласованный с вами автор (кандидат наук) пишет хорошую дипломную работу и по главам сдает ее вам на проверку. После окончательной оплаты вы в оговоренный срок получаете готовый диплом, а исполнитель отвечает на вопросы и помогает подготовиться к защите.
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как воспользоваться нашими услугами в Москве и регионах?
                </h2>
                <p className="block-text__par">
                    Итак, вы узнали, сколько стоит купить дипломную работу в компании BeSmarter!, и цена вас устраивает. В таком случае вам следует оформить заявку удобным для себя способом:
                </p>
                <ul>
                    <li>
                        онлайн – заполните форму на сайте и дождитесь ответа нашего менеджера;
                    </li>
                    <li>
                        звонок – свяжитесь с нами по телефону 8 (495) 772-4090;
                    </li>
                    <li>
                        визит – наш <a href="/contacts">адрес</a>: Москва, пер. Большой Кисловский, дом 1 строение 2, офис 211.
                    </li>
                </ul>
                <p className="block-text__par">
                    <b>Не теряйте времени – чем раньше вы оформите свой заказ, тем дешевле окажется услуга!</b>
                </p>
            </section>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page