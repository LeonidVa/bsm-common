import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'

import Video from 'components/common/VideoBlock';



const page = () => (
    <Wrapper title="Где заказать (купить) магистерскую диссертацию – можно заказать диссертацию магистра в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная </a>
                    </Link>
                    <span> / </span>
                    <Link href="/dissertaciya-na-zakaz">
                        <a>Диссертация</a>
                    </Link>
                    <span> / </span>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a>Магистерская</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Где заказать</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/magisterskaya">
                    <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Магистерская диссертация</span>
                            <p className="block-service__par">Быстро и качественно!</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 23 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
                    <Link href="/dissertaciya-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диссертация<br/>под ключ</span>
                            <p>Берем заботы на себя</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Консультация автора</span>
                            <p>Прямая связь</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Сопровождение<br/>до защиты</span>
                            <p>Надежно, спокойно</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/doktorskaya">
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
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
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
                    Где заказать магистерскую диссертацию
                </h2>
                <p className="block-text__par">
                    Не секрет, что большинство студентов старших курсов помимо учебы еще и работают. И времени на написание магистерской диссертации у них не так много. Кроме того, отсутствует и опыт выполнения научных работ такого уровня. Обычные курсовые и даже диплом не идут ни в какое сравнение с диссертацией.
                </p>
                <p className="block-text__par">
                    Предлагаем не рисковать получением магистерской степени, которая открывает дорогу к вашему всестороннему профессиональному развитию. Закажите выполнение работы высококлассным ученым, работающим в компании BeSmarter!. А сами продолжайте спокойно зарабатывать деньги и не спеша готовиться к защите.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Где заказать магистерскую диссертацию?
                </h2>
                <p className="block-text__par">
                    Это самый важный вопрос, поскольку от него зависит не только эффективность финансовых вложений, но и ваши шансы на получение желаемой научной степени. Лучшее место в Москве, где заказать магистерскую диссертацию можно с гарантией успешной защиты – компания BeSmarter! И это не голословное утверждение!
                </p>
                <p className="block-text__par">
                    Мы работаем в данной сфере более 10 лет, и 97,65% всех научных трудов, написанных нашими специалистами, прошли стадию защиты без всяких проблем. Чтобы добиваться подобных успехов, мы исповедуем три главных принципа:
                </p>
                <ul>
                    <li>
                        Компетентность. Обуславливается привлечением к написанию работ исключительно опытных вузовских преподавателей с кандидатской научной степенью.
                    </li>
                    <li>
                        Ответственность. Выражается в профессиональном сопровождении клиента от момента заказа и до самой защиты.
                    </li>
                    <li>
                        Гибкость. Это наше умение найти индивидуальный подход к каждому человеку.
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
                    Как определяется стоимость услуги?
                </h2>
                <p className="block-text__par">
                    В первом приближении диапазон цен вы сможете прикинуть в соответствующем разделе нашего сайта. Стоимость именно вашей магистерской диссертации мы определим в процессе предварительной консультации. Следует понимать, что трудоемкость конкретной работы существенно варьируется в зависимости от сопутствующих факторов.
                </p>
                <p className="block-text__par">
                    Главный критерий ценообразования – это, конечно же, сложность предмета и выбранной темы. Дешевле всего стоят диссертации по гуманитарным специальностям, в то время, как расценки по техническим дисциплинам существенно выше среднего. Также влияние на итоговую стоимость услуги оказывает срочность выполнения и специальные требования.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как мы работаем?
                </h2>
                <ul>
                    <li>
                        Заявка. Чтобы воспользоваться нашими услугами, заполните <b><a href="#form">онлайн-форму</a></b> на сайте, свяжитесь с нами по телефону (+7(495)772-4090, +7(495)772-9040) или посетите <b><Link href="/contacts"><a>офис</a></Link></b> компании (Большой Кисловский переулок, д. 1 стр. 2, офис 211).
                    </li>
                    <li>
                        Договор. Гарантией вашего спокойствия является официальный договор, в котором прописываются все детали нашего сотрудничества – сроки сдачи, стоимость, требования к работе и т. д.
                    </li>
                    <li>
                        Исполнение. После всех формальностей наши сотрудники приступают к работе. В случае необходимости они по вашему запросу внесут необходимые правки и ответят на любые вопросы.
                    </li>
                    <li>
                        Защита. Мы поможем вам качественно подготовиться к защите диссертации, включая содействие в подготовке доклада и презентации, тренировку ответов на вопросы комиссии и другие аспекты.
                    </li>
                </ul>
            </section>
            
            <Video>
                <iframe src="//vk.com/video_ext.php?oid=372065572&id=456239032&hash=e0751038dfbca771&hd=2"></iframe>
            </Video>

            <LinksBlock links={
                [
                    { url: "/dissertaciya-na-zakaz/magisterskaya/skolko-stoit", text: "Сколько стоит магистерская диссертация" },
                ]
            }/>

        </div>
    </Wrapper>
);


export default page