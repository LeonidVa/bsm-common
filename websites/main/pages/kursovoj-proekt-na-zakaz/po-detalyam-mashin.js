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
import infoBlockConfig from 'data/infoBlock/kurs-proekt'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/kursovayaNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import KursovoyProekt from "components/common/ServiceBlock/ready-made/KursovoyProekt";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"


const page = () => (
  <Wrapper title="Заказать курсовую работу по деталям машин в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по деталям машин по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
    <div className="wrapper bg bg-c2 bg-img bg-img1">


      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/kursovoj-proekt-na-zakaz">
            <a>Курсовой проект</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По деталям машин</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/kursovoj-proekt-na-zakaz" name="Курсовой проект" position="2" />
            <ItemListElement url="https://besmarter.ru/kursovoj-proekt-na-zakaz/po-detalyam-mashin" name="По деталям машин" position="3" />
        </ItemScope>



      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KursovoyProekt/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать курсовую работу по деталям машин
        </h1>
        <p className="block-text__par">
          «Детали машин» – это одна из базовых дисциплин для студентов любых машиностроительных вузов. Процесс обучения подразумевает выполнение курсовых проектов как эффективного способа контроля знаний и умений.
        </p>
        <p className="block-text__par">
          Важной особенностью данной работы является высокая степень индивидуализации. Из-за огромной номенклатуры деталей (в сложных машинах их тысячи) найти даже похожий курсач в Интернете практически невозможно.
        </p>
        <p className="block-text__par">
          Если у вас не хватает навыков или времени, чтобы самостоятельно написать работу, выполнить расчеты или сделать чертеж, предлагаем воспользоваться услугами опытных экспертов компании BeSmarter! У нас вы сможете срочно и недорого заказать курсовой проект по деталям машин на выгодных условиях.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/detali-mash.jpg')} altText="Заказать курсовую работу по деталям машин"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Наши преимущества
        </h2>
        <ul>
          <li>
            <b>Квалификация. </b>Написание курсового проекта будет поручено кандидату технических наук, действующему преподавателю данной дисциплины. Это гарантия правильности всех расчетов и грамотного оформления.
          </li>
          <li>
            <b>Ответственность. </b>Все наши обязательства фиксируются в официальном договоре. Каждому клиенту присваивается индивидуальный куратор, который готов прийти на помощь в любой момент.
          </li>
          <li>
            <b>Прозрачные цены. </b>Стоимость наших услуг определяется объективными критериями – сложность конкретной темы, требования к объему и уникальности текста, срочность и так далее.
          </li>
        </ul>
        <p className="block-text__par">
          Курсовые работы по деталям машин от BeSmarter! – это безупречное качество доступное каждому, убедитесь в этом сами!
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Основные этапы сотрудничества
        </h2>
        <p className="block-text__par">
          Чтобы воспользоваться нашими услугами, вам нужно заказать курсовой «Детали машин» одним из перечисленных ниже способов. После рассмотрения заявки мы проводим с вами собеседование, по итогам которого составляется официальный договор.
        </p>
        <p className="block-text__par">
          Далее вы вносите 50% предоплаты, и согласованный с вами автор приступает к работе. Проект сдается вам на проверку в оговоренный срок. В случае необходимости вносятся бесплатные корректировки. Затем исполнитель помогает вам подготовиться к защите.
        </p>
        <p className="block-text__par">
          Узнать более подробно о том, как мы работаем, и какие преимущества вы получите при сотрудничестве с нами, можно у менеджеров компании.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
      </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Как заказать курсовой проект по деталям машин?
        </h2>
        <p className="block-text__par">
          Доступны три варианта связи:
        </p>
        <ul>
          <li>
            на сайте – нужно оформить <b><a href="#form">онлайн заявку</a></b> и дождаться ответа;
          </li>
          <li>
            по телефону – позвоните нам по номеру <br/>8 (495) 772-40-90;
          </li>
          <li>
            в Москве – приходите <Link href="/contacts"><b><a>к нам</a></b></Link> по адресу: пер. Большой Кисловский, дом 1, стр. 2, оф. 211.
          </li>
        </ul>
        <p className="block-text__par">
          Сделайте заказ прямо сейчас и избавьте себя от лишних проблем!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
