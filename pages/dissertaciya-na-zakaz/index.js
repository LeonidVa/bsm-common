import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/disser1'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disser from 'components/config/linksBlock/disser';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Заказать диссертацию – помощь в написании диссертации на заказ в Москве, заказать диссертационную работу срочно в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="Заказать диссертацию. В компании  BeSmarter! Вы сможете заказать помощь в написании диссертации от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать диссертацию помощь в написании на заказ в Москве написать в короткие сроки срочно под заказ" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная </a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Диссертация</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/kandidat.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Кандидатская диссертация</span>
                            <p className="block-service__par">Написание и оформление</p>
                            <p className="block-service__par">Публикации</p>
                            <p className="block-service__par">Строго конфиденциально</p>
                            <p className="block-service__par">Индивидуально</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аспирантские работы</span>
                            <p>От поступления<br/>до защиты</p>
                        </a>
                    </Link>
                    <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Статьи</span>
                            <p>Написание и размещение</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                            <p>Строго по ГОСТу</p>
                        </a>
                    </Link>
                    <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Апробация</span>
                            <p>Реальные эксперименты</p>
                        </a>
                    </Link>
                </div>
            </section>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/doktorskaya">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/doctorskaya.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Докторская диссертация</span>
                            <p className="block-service__par">Актуальность и научная новизна</p>
                            <p className="block-service__par">Ваши и наши данные</p>
                            <p className="block-service__par">Строго конфиденциально</p>
                            <p className="block-service__par">Индивидуально</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-35">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Прямая связь с автором</span>
                            <p>Постоянный контроль</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Публикации</span>
                            <p>Журналы ВАК и иностранные</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Обзор литературы</span>
                            <p>Свежие источники</p>
                        </a>
                    </Link>
                </div>
            </section>

            <section className="block-text">
                <ul className="marker">
                    <li>
                        Есть идеи и наработки, но нет времени на написание?
                    </li>
                    <li>
                        Мы поможем с настоящей серьезной диссертацией!
                    </li>
                    <li>
                        Прямо сейчас обратитесь к нам, и Вы отлично
                    </li>
                </ul>
                    <p className="block-text__par">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;защититесь!
                    </p>
            </section>

            <FormEstimate />





            <section className="block-service__dis">
            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/doktorskaya">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/mat-dlya-zash.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Материалы для успешной защиты</span>
                            <p className="block-service__par">Эффектная презентация</p>
                            <p className="block-service__par">Быстро и качественно</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Монография</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста до 98%</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                        </a>
                    </Link>
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад Слайды</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Плакаты к защите</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                        </a>
                    </Link>
                </div>
            </section>
            </section>

            <section className="block-text">
                <h1 className="block-text__title">
                    Заказать диссертацию
                </h1>
                <ul>
                    <li>
                        <b>Оперативность</b><br/>
                        По желанию клиента мы можем написать диссертацию на заказ в короткие сроки без ущерба ее качеству.
                    </li>
                    <li>
                        <b>Квалификация</b><br/>
                        Компания BeSmarter! имеет многолетний опыт написания диссертационных работ по любым дисциплинам, свыше 98% наших клиентов защитились на «отлично».
                    </li>
                    <li>
                        <b>Профессионализм</b><br/>
                        Мы работаем строго в соответствии с договором, в котором прописаны все требования к работе, включая обязательства о неразглашении.
                    </li>
                    <li>
                        <b>Индивидуальный подход</b><br/>
                        К клиенту прикрепляется личный менеджер, контролирующий выполнение заказа и готовый помочь в любую минуту.
                    </li>
                </ul>
            </section>



            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <a name="form" id="form"/>
            <FormOrder />

            <ImageBlock imageSrc={require('static/images/block/dissertaciya-na-zakaz.jpg')}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Основные этапы сотрудничества
                </h2>
                <ul>
                    <li>

                    Этап 1. Вы оформляете заявку на помощь в написании диссертации. Сделать это можно прямо на сайте или в нашем <Link href="/contacts"><b><a>офисе</a></b></Link> в Москве.

                    </li>
                <li>
                    Этап 2. Мы проводим с вами собеседование и составляем официальный договор с указанием всех аспектов заказа – сроки, стоимость, исполнитель, требования и так далее. Вы вносите 50% предоплаты.
                </li>
                <li>
                    Этап 3. Согласованный автор пишет диссертацию под заказ и сдает ее вам на проверку по частям. По Вашему требованию вносятся бесплатные доработки. После 100%-ной оплаты и сдачи диссертационной работы наш эксперт помогает вам подготовиться к отличной защите.
                </li>
                </ul>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Наши специалисты
                </h2>
                <p className="block-text__par">
                    В нашей компании написание диссертации на заказ поручается действующим преподавателям ведущих российских вузов по соответствующим специальностям с ученой степенью не ниже кандидатской. Это гарантирует максимально полное раскрытие темы и грамотность оформления.
                </p>
                <p className="block-text__par">
                    Перед тем как заказать диссертационную работу, каждому клиенту предоставляется возможность переговорить с потенциальными исполнителями. Это позволит вам убедиться в их компетентности и выбрать наиболее подходящую на ваш взгляд кандидатуру.
                </p>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />



            <section className="block-text">
                <h2 className="block-text__title">
                    Можно ли сэкономить при заказе диссертации?
                </h2>
                <p className="block-text__par">
                    Разумеется! Есть несколько простых способов заказать диссертацию недорого.
                </p>
                <ol>
                    <li>
                        Согласуйте тему с нами (если ее можно выбрать). Диссертация на заказ оценивается в соответствии с ее сложностью, поэтому мы можем подсказать, какая тема «выгоднее».
                    </li>
                    <li>
                        Принесите свои материалы. Если у вас накопились собственные наработки по теме диссертации, мы используем их в работе и снизим цену.
                    </li>
                    <li>
                        Время – деньги. Мы можем написать диссертацию даже очень срочно – за сутки, но для вашей экономии лучше оформить заказ заранее. Сделайте это прямо сейчас!
                    </li>
                </ol>
                <p className="block-text__par" style={{textAlign: 'center', fontStyle: 'italic'}}>
                    <b>
                        Заказать диссертацию в BeSmarter! могут жители не только Москвы, но и других регионов РФ. Воспользуйтесь нашим удобным сервисом!
                    </b>
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>




            <LinksBlock links={disser}/>
        </div>
    </Wrapper>
);


export default page
