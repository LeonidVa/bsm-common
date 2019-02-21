import ServiceBlock from 'bsm-shared/components/common/ServiceBlock'
import servicecards from "bsm-shared/data/serviceBlock/magisDis";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        url="#form"
        image={require('bsm-shared/static/images/block/k.jpg')}
        gradient="rgba(251, 201, 1, 0.95), rgba(251, 201, 1, 0.7)"
        title="Магистерская диссертация"
        text={<div>
            <p>Быстро и качественно!</p>
            <p>С нами твоя защита пройдет легко!</p>
            <p>От 23 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Дипломный проект"],
                servicecards["Дипломная работа"],
                servicecards["Диплом МВА"],
            ],
        ]}
    />
);