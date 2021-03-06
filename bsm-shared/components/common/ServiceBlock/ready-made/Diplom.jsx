import ServiceBlock from 'bsm-shared/components/common/ServiceBlock'
import servicecards from "bsm-shared/data/serviceBlock/diplom";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        url="/diplom-na-zakaz"
        image={require('bsm-shared/static/images/block/j.jpg')}
        gradient="rgba(199, 212, 229, 0.95), rgba(199, 212, 229, 0.7)"
        title="Дипломная работа"
        text={<div>
            <p>Быстро и качественно!</p>
            <p>С нами твоя защита пройдет легко!</p>
            <p>От 14 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Дипломный проект"],
                servicecards["Магистерская диссертация"],
                servicecards["Диплом MBA"],
            ],
        ]}
    />
);