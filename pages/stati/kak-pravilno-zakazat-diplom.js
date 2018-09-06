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
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Как правильно заказать диплом? | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Работа, семья, дети или иные обстоятельства не позволяют Вам уделять все свое время учебе, и Вы решили заказать диплом. Это правильный выбор! Тратить свои последние силы и здоровье, выкраивая время на написание такой сложной работы – не слишком рациональное решение. Воспользовавшись услугой «диплом на заказ», Вы избавите себя от многих трудностей и неприятностей, которые неизменно встречаются на пути у учащихся последних курсов вузов.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/stati">
                        <a>Курсовая работа</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Как правильно заказать диплом?</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/stati/kak-pravilno-zakazat-diplom#form">
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
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Дипломный проект</span>
                            <p>от 21 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Магистерская диссертация</span>
                            <p>от 23 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диплом MBA</span>
                            <p>от <b>25 000</b> руб.</p>
                        </a>
                    </Link>
                </div>
            </section>


            <section className="block-service__dis">
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
            </section>



            <section className="block-text">
                <h1 className="block-text__title">
                    Как правильно заказать диплом?
                </h1>
                <p className="block-text__par">
                    Работа, семья, дети или иные обстоятельства не позволяют Вам уделять все свое время учебе, и Вы решили <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>. Это правильный выбор! Тратить свои последние силы и здоровье, выкраивая время на написание такой сложной работы – не слишком рациональное решение. Воспользовавшись услугой «<Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>», Вы избавите себя от многих трудностей и неприятностей, которые неизменно встречаются на пути у учащихся последних курсов вузов.
                </p>
                <p className="block-text__par">
                    Итак, Вы твердо приняли решение <b>заказать диплом</b> и остановили свой выбор на компании, которой поручите написание работы. Как правило, на большинстве сайтов, предоставляющих подобные услуги, имеется специальная форма, которую необходимо заполнить для оформления заказа. Но перед тем, как приступить к заполнению полей этой формы, Вы должны располагать определенными сведениями относительно своей дипломной работы. Так на что же нужно обратить свое внимание?
                </p>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/19(16).jpg')}/>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />



            <section className="block-text">
                <p className="block-text__par">
                    <b><i>Во-первых</i></b>, это тема Вашей дипломной работы. Хорошо, если Вы уже знаете тему, на которую будет диплом. Еще лучше, если она уже утверждена Вашим научным руководителем. Если же темы пока что у Вас нет, автор, который будет писать Ваш диплом, может подобрать несколько вариантов возможных тем, одну из которых Вы и выберете.
                </p>
                <p className="block-text__par">
                    <b><i>Во-вторых</i></b>, дисциплина, по которой будет писаться диплом. Ведь одна и та же тема может быть актуальной одновременно для нескольких дисциплин, и в каждой дисциплине эту тему можно раскрыть по-разному: рассмотреть различные стороны, аспекты, подходы к проблеме. Именно поэтому чрезвычайно важно указать наименование дисциплины.
                </p>
                <p className="block-text__par">
                    <b><i>В-третьих</i></b>, объем работы. Объем дипломной работы должен составлять, согласно ГОСТу, примерно, 60-80 листов формата А4. Но количество страниц может колебаться, так как вузы иногда предоставляют свои требования к оформлению диплома, в том числе, и к его объему. Стоит выяснить в своем вузе заранее, на сколько страниц должен быть Ваш диплом, и обязательно указать это при заказе работы.
                </p>
                <p className="block-text__par">
                    <b><i>В-четвертых</i></b>, это сроки выполнения работы. Обязательно при заказе своего диплома укажите дату, когда Вы желаете получить уже готовый результат. Старайтесь не откладывать на последний момент свой диплом, когда до защиты останется всего несколько дней. Чем раньше Вы оформите заказ, тем больше гарантий того, что работа будет выполнена качественно, ведь автору не придется писать ее второпях, да и к тому же, у Вас будет достаточно времени, чтобы изучить ее и, при необходимости, сделать замечания,  которые учтет автор при правках.
                </p>
                <p className="block-text__par">
                    Кроме того, если у Вас уже есть готовый план, какие-то наработки, наброски диплома, все это следует передать автору, который будет заниматься Вашим дипломом. Таким образом, Вы не только облегчите ему работу, но и с большей вероятностью получите тот результат, который ожидаете.
                </p>
                <p className="block-text__par">
                    Заказать качественный диплом, написанный высокопрофессиональными специалистами, Вы можете на сайте <Link href="/"><a>2018.besmarter.ru</a></Link>.
                </p>
            </section>


            <a name="form" id="form"/>
            <FormOrder />



            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>



        </div>
    </Wrapper>
);


export default page
