 import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/diplomNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
 import Diplom from "components/common/ServiceBlock/ready-made/Diplom"


const page = () => (
  <Wrapper title="Заказать дипломную работу по бухгалтерскому учёту в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по бухгалтерскому учету по выгодной цене в Москве. Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img5">



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
            <a>По бухгалтерскому учёту</a>
          </Link>
        </div>
      </section>

        <span visibility = "hidden" height = "0" weidht = "0" itemScope itemType = "http://schema.org/BreadcrumbList">
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                         itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Дипломная работа</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-na-zakaz/buhgalterskij-uchet">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По бухгалтерскому учёту</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <Diplom/>

    <MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать дипломную работу по бухгалтерскому учёту
        </h1>
        <ul>
          <li>
            Хотите, чтобы для Вас в сжатые сроки была написана дипломная работа по бухгалтерскому учёту?
          </li>
          <li>
            Вам нужно купить дипломную работу по бухучёту, которая написана высококлассными специалистами?
          </li>
          <li>
            Необходима дипломная работа по бухучёту с высокой уникальностью?
          </li>
        </ul>
        <p className="block-text__par">
          Тогда Вам помогут специалисты компании BeSmarter!
        </p>
        <p className="block-text__par">
          Мы напишем для Вас актуальную и содержательную работу по бухучёту в срок и даже от одного дня!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-po-buch.jpg')} altText="Заказать дипломную работу по бухгалтерскому учёту"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Купить дипломную работу по бухгалтерскому учёту
        </h2>
        <p className="block-text__par">
          Заказать дипломную работу по бухгалтерскому учёту – это отличный выход для студентов, у которых нет времени на написание диплома.
        </p>
        <p className="block-text__par">
          Опытные кандидаты и доктора наук, работающие в компании BeSmarter!, охотно напишут для Вас качественную работу.
        </p>
        <p className="block-text__par">
          Став нашим заказчиком, Вы получите:
        </p>
        <ul style={{listStyle: 'none'}}>
          <li>
            <b>Оперативность выполнения работы</b><br/>
            Мы напишем для Вас диплом в срок от одного дня.
          </li>
          <li>
            <b>Полную безопасность</b><br/>
            Все свои обязательства перед клиентом мы прописываем в официальном договоре.
          </li>
          <li>
            Сделав у нас заказ, Вы можете быть уверены в получении качественной работы, написанной настоящими профессионалами своего дела.
          </li>
          <li>
            <b>Приемлемую стоимость</b><br/>
            Мы предлагаем своим клиентам разумное соотношение цены и качества работы. Заказать диплом по бухучёту можно по цене от 14000 рублей.
          </li>
          <li>
            <b>Высокую уникальность работы</b><br/>
            Заказать диплом по бухгалтерскому учёту в нашей компании – значит получить текст с уникальностью более 70% по системе «Антиплагиат».
          </li>
          <li>
            <b>Бесплатное внесение правок</b><br/>
            При возникновении замечаний к работе со стороны Вашего преподавателя, мы охотно внесем необходимые правки в гарантий срок.
          </li>
          <li>
            <b>Сопровождение до успешной защиты</b><br/>
            Мы готовы написать для Вас не только диплом, но и речь для защиты, презентацию проекта и другие материалы. Также наши менеджеры дадут Вам полезные советы о том, как уверенно и отлично защититься.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Написание диплома по бухгалтерскому учёту
        </h2>
        <p className="block-text__par">
          Получив от Вас заказ на написание диплома, мы составляем техническое задание для нашего автора. В нём мы указываем предпочитаемые Вами научные методики и компании, на базе которых нужно провести исследования для Вас.
        </p>
        <p className="block-text__par">
          Благодаря этому Вы получаете отличную работу, которая написана специально для Вас. Мы уверены: Вы сможете защититься на высший балл.
        </p>
        <p className="block-text__par">
          Вам нужна интересная и качественная работа по бухучёту? Напишем!
        </p>
        <p className="block-text__par">
          Звоните нам прямо сейчас +7 495 772 40 90, посетите наш офис на Арбате!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

        <Video>
            <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
