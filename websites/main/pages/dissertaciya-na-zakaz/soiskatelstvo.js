import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/disser'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disSoiskat from 'data/linksBlock/disSoiskat';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";

const page = () => (
  <Wrapper title="Соискательство | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Если у Вас нет времени учиться в аспирантуре, а Вы хотите защитить кандидатскую диссертацию, то Вы можете стать соискателем ученой степени кандидата наук.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



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
          <Link href="#">
            <a>Соискательство</a>
          </Link>
        </div>
      </section>

        <span style={{visibility:"hidden", height:0, width:0}} itemScope itemType = "http://schema.org/BreadcrumbList">
            <span style={{visibility:"hidden", height:0, width:0}} itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span style={{visibility:"hidden", height:0, width:0}} itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span style={{visibility:"hidden", height:0, width:0}} itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz">
                    <span style={{visibility:"hidden", height:0, width:0}} itemProp = "name">Диссертация</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span style={{visibility:"hidden", height:0, width:0}} itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/soiskatelstvo">
                    <span style={{visibility:"hidden", height:0, width:0}} itemProp = "name">Соискательство</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

      <section className="block-text">
        <h1 className="block-text__title">
          Соискательство
        </h1>
        <p className="block-text__par">
          Если у Вас нет времени учиться в аспирантуре, а Вы хотите защитить кандидатскую диссертацию, то Вы можете стать <b>соискателем ученой степени кандидата наук</b>.
        </p>
        <p className="block-text__par">
          Соискательство позволяет сократить срок обучения в аспирантуре и докторантуре до 2-х и даже до 1-го года. Если все же и за три года обучения в аспирантуре или докторантуре соискателю научной степени не удалось завершить исследование, срок обучения, по усмотрению ректора, может быть продлен еще на один год для завершения
          диссертации. После 3-х лет обучения у соискателя меняется статус; переводясь на 4-ый год обучения для завершения диссертации, соискатель становится стажером.
        </p>
        <p className="block-text__par">
          Для подготовки диссертации в качестве соискателя нужно прикрепиться к организации (НИИ или ВУЗу), имеющей Диссертационный совет по Вашей специальности, которая может принять кандидатские экзамены и провести защиту.
        </p>
        <p className="block-text__par">
          Команда научно-консалтингового центра компании BeSmarter!, состоящая из опытных профессионалов высочайшего уровня, подключится и поможет Вам на любом этапе решения стоящих перед Вами задач. Наши сотрудники имеют ученые степени кандидатов и докторов наук и ученые звания доцентов и профессоров с многолетним опытом успешной
          подготовки множества диссертантов из разных городов России и других стран. С нами также работают бизнес-консультанты, аналитики, статистики, научные редакторы, библиотекари, архивисты и другие специалисты.
        </p>
      </section>

      <FormEstimate/>

      <MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <p className="block-text__par">
          При прикреплении желательно иметь уже<strong> опубликованные научные работы и развернутый план по теме будущего диссертационного исследования</strong>. В некоторых случаях требуется иметь не менее 30% текста готовой диссертации, например, одну из глав. Специалисты компании BeSmarter! помогут Вам в написании и
          опубликовании требуемого объема работ.
        </p>
        <p className="block-text__par">
          Если у Вас не сданы экзамены кандидатского минимума, то ответы на вопросы экзаменов индивидуально для Вас или для группы соискателей подготовит наш автор. Вам останется только выучить их.
        </p>
      </section>

      <section className="block-text">
        <p className="block-text__par">
          Итак, прикрепившись к организации (ВУЗу или НИИ), имеющей соответствующий Вашей специальности Диссертационный совет, Вы с нашей помощью быстро и качественно завершите свой научный труд и успешно защитите диссертацию.
        </p>
        <p className="block-text__par">
          Доверьтесь нашим опытным специалистам!
        </p>
        <p className="block-text__par">
          Мы сможем рассказать уже сегодня, чем мы можем Вам помочь, когда Вы <a href="#form">заполните форму заказа</a> или позвоните нам для бесплатной консультации по телефону <br/>+7 495 772 40 90!
        </p>
        <p className="block-text__par" style={{textAlign: 'center'}}>
          Мы ждем Вас, мы всегда с Вами!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disSoiskat}/>
    </PageWrapper>
  </Wrapper>
);


export default page
