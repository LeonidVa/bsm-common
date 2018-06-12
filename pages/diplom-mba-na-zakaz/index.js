import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/mba'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'


const page = () => (
    <Wrapper title="Диплом MBA (мва, мба) – заказать диплом MBA! Помощь в написании дипломной работы mba | Диплом mba на заказ в Москве – Besmarter!">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/"><a>Главная</a></Link>
                    <span> / </span>
                    <Link href="/diplom-mba-na-zakaz"><a>Диплом MBA</a></Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/mba-na-zakaz">
                    <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Диплом MBA</span>
                            <p className="block-service__par">Решаем кейсы любой сложности</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 25 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диплом MBA<br/>под ключ</span>
                            <p>Берем заботы на себя</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Консультация автора</span>
                            <p>Прямая связь</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Сопровождение<br/>до защиты</span>
                            <p>Надежно, спокойно</p>
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
                    Диплом MBA на заказ
                </h2>
                <ul>
                    <li>
                        <b>Гарантия качества</b><br/>
                        Мы напишем оригинальный диплом MBA на заказ в полном соответствии с вашими требованиями и правилами оформления.
                    </li>
                    <li>
                        <b>Уникальность текста</b><br/>
                        Осуществляется обязательная проверка работы с помощью всех основных онлайн-сервисов антиплагиата (АП, АП.вуз, Etxt, Advego).
                    </li>
                    <li>
                        <b>Пунктуальность</b><br/>
                        Срок сдачи готового диплома фиксируется в официальном договоре и отслеживается вашим индивидуальным менеджером.
                    </li>
                    <li>
                        <b>Последовательность</b><br/>
                        Мы сопровождаем наших клиентов вплоть до успешной защиты, консультируя и помогая с подготовкой дополнительных материалов.
                    </li>
                    <li>
                        <b>Удобство</b><br/>
                        С помощью нашего сайта заказать диплом MBA можно не только в Москве, но и в любом регионе России.
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как мы работаем?
                </h2>
                <p className="block-text__par">
                    Вы оформляете заявку на помощь в написании дипломной работы MBA удобным для себя способом – онлайн, по телефону (<b>+7 495 772-4090</b>) или в нашем <a href="/contacts">офисе</a> (Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211).
                </p>
                <p className="block-text__par">
                    Мы проводим с вами собеседование и уточняем все детали заказа. Определяется стоимость услуги и согласовывается автор. По результатам переговоров подписывается официальный договор с указанием всех ваших требований и наших обязательств.
                </p>
                <p className="block-text__par">
                    Согласованный исполнитель пишет диплом МВА на заказ и сдает его в оговоренные сроки. При необходимости вы можете заказать бесплатные корректировки. Далее автор консультирует вас и помогает подготовиться к защите.
                </p>
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
                    Кто наши авторы?
                </h2>
                <p className="block-text__par">
                    Они – наша главная гордость! Компания BeSmarter! принципиально не пользуется услугами фрилансеров-копирайтеров и прочих ненадежных кадров. В нашем штате – исключительно действующие преподаватели вузов различных дисциплин, имеющие научную степень как минимум кандидата наук.
                </p>
                <p className="block-text__par">
                    Более того, мы предоставляем вам уникальную возможность предварительно удостовериться в компетентности потенциального исполнителя и переговорить с ним. Благодаря такому профессиональному подходу более 98% наших клиентов защищаются на «отлично»!
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как сэкономить при заказе диплома MBA?
                </h2>
                <p className="block-text__par">
                    Хотите <b>написать диплом MBA недорого</b>? Вот три простых способа экономии:
                </p>
                <ol>
                    <li>
                        Не теряйте времени. Заказать диплом МВА лучше заранее. Мы, конечно, можем написать работу срочно, даже за 1 день, но это обойдется вам значительно дороже.
                    </li>
                    <li>
                        Проконсультируйтесь с нами. Если есть возможность выбора темы, позвольте нам помочь найти оптимальный вариант.
                    </li>
                    <li>
                        Предложите свои наработки. Если вы уже приступили к написанию работы, принесите эти материалы, и мы снизим цену.
                    </li>
                </ol>
                <p className="block-text__par">
                    <b style={{fontStyle: 'italic'}}>Воспользуйтесь услугами специалистов BeSmarter!, и вы не пожалеете об этом!</b>
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page