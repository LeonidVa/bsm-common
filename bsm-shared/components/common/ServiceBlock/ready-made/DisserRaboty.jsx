import ServiceBlock from 'bsm-shared/components/common/ServiceBlock'
import servicecards from "bsm-shared/data/serviceBlock/disserRaboty";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        url="#form"
        image={require('bsm-shared/static/images/block/3.jpg')}
        gradient="rgba(167, 172, 176, 0.95), rgba(167, 172, 176, 0.7)"
        title="Диссертационные работы"
        text={<div>
            <p>Написание и оформление</p>
            <p>Публикации</p>
            <p>Строго конфиденциально</p>
            <p>Индивидуально</p>
        </div>}
        cards={[
            [
                servicecards["Аспирантские работы"],
                servicecards["Статьи"],
                servicecards["Кандидатская диссертация"],
                servicecards["Докторская диссертация"],
            ],
        ]}
    />
);