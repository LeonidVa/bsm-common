import Link from 'next/link';

import React, {Component} from 'react';

import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';

import ImageBlock from 'components/common/ImageBlock'
import Accordion from 'components/common/Accordion'
import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import LinksBlock from 'components/common/LinksBlock'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider'

import fields from 'data/form/main';
import reviewBlockConfig from 'data/reviewBlockConfig';
import links from 'data/linksBlockConfig';

import MetaTags from 'react-meta-tags';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'
import MessBlock from "components/common/MessBlock";
import infoBlockConfig from "data/infoBlock/diplom";
import InfoBlock from "components/common/InfoBlock";
import CurrentOffer from "components/content/offers/CurrentOffer";
import MagisDisAnother from "components/common/ServiceBlock/ready-made/MagisDisAnother";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"


const page = () => (
  <Wrapper title="Гарантия качества в компании BeSmarter!. Тел. +7 (495) 772-40-90." description="Наши довольные клиенты — это самая главная и важная гарантия, которую мы предоставляем тебе. Ведь это — реальный показатель высокого качества нашей работы. Все наши авторы — преподаватели, кандидаты или доктора наук.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Гарантии</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/garantii" name="Гарантии" position="2" />
        </ItemScope>

        <span style={{visibility:"hidden", height:0, width:0}} itemScope itemType = "http://schema.org/BreadcrumbList">
            <span style={{visibility:"hidden", height:0, width:0}} itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span style={{visibility:"hidden", height:0, width:0}} itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span style={{visibility:"hidden", height:0, width:0}} itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/garantii">
                    <span style={{visibility:"hidden", height:0, width:0}} itemProp = "name">Гарантии</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>

      <MessBlock/>

        <MagisDisAnother/>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/gar.jpg')} altText="Наши гарантии"/>

      <section className="block-text">
        <h1 className="block-text__title">
          Гарантии
        </h1>
        <p className="block-text__par">
          Мы знаем, насколько важной для вашей карьеры может оказаться заказанная работа, и понимаем, что вам нужны гарантии нашей добросовестности и ответственности. Ведь «переделать» все в последний момент не получится! Поэтому мы хотим успокоить вас, перечислив 7 причин, благодаря которым можно чувствовать себя абсолютно
          уверенно.
        </p>
        <ul>
          <li>
            <b>Качество</b><br/>
            Вашу работу будут писать действующие преподаватели вузов, кандидаты наук в соответствующей отрасли науки, имеющие огромный опыт в решении подобных задач. Кроме того, наш отдел контроля мониторит качество выполнения работы на каждом этапе.
          </li>
          <li>
            <b>Оригинальность</b><br/>
            Мы не берем за основу имеющиеся в Интернете научные труды. Каждый заказ выполняется с «нуля», включая при необходимости настоящие научные исследования. Уникальность текста проверяется во всех популярных онлайн-сервисах.
          </li>
          <li>
            <b>Пунктуальность</b><br/>
            Своевременность сдачи готовой работы, а также отдельных ее глав (в случае с диссертациями) гарантирует официальный договор, подписываемый на стадии предварительного собеседования. Даже сверхсрочный заказ будет сдан вовремя!
          </li>
          <li>
            <b>Интерактивность</b><br/>
            Мы на связи каждый день, без праздников и выходных. В любой момент мы выслушаем ваши пожелания, бесплатно внесем срочные правки и ответим на вопросы. Нам важно, чтобы результат в точности соответствовал вашим ожиданиям.
          </li>
          <li>
            <b>Сопровождение</b><br/>
            Наше сотрудничество не заканчивается днем сдачи готовой работы. Мы продолжим оказывать вам всестороннюю поддержку вплоть до момента успешной защиты. Сюда входит помощь в подготовке презентации, доклада, тренировка ответов и пр.
          </li>
          <li>
            <b>Конфиденциальность</b><br/>
            Мы осознаем, насколько важно для вашей будущей научной карьеры сохранить безукоризненную репутацию, поэтому детали нашего сотрудничества останутся строго между нами. Этот момент прописывается в официальном договоре.
          </li>
          <li>
            <b>Опыт</b><br/>
            Наконец, самая главная гарантия успешного сотрудничества с нашей компанией – это, конечно же, реальные результаты. За 10 лет работы мы написали тысячи научных трудов, и 97,65% из них были успешно защищены. Статистика говорит сама за себя!
          </li>
        </ul>
        <p className="block-text__par">
          Если вас удовлетворили наши гарантии, предлагаем воспользоваться услугами компании BeSmarter! прямо сейчас.
        </p>
        <p className="block-text__par">
          Для этого свяжитесь с нами любым удобным для себя способом – заполнив <a href="#form">онлайн форму</a> на сайте, позвонив по телефону +7(495)772-4090 или +7(495)772-9040, или посетив <Link href="/contacts"><a>офис</a></Link> (Большой Кисловский переулок, д. 1 стр. 2, офис 211).
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>

    </div>
  </Wrapper>
);

export default page

