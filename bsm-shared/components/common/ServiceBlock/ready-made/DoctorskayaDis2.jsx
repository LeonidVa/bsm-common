import ServiceBlock from 'bsm-shared/components/common/ServiceBlock'
import servicecards from "bsm-shared/data/serviceBlock/doctorskayaDis";
import React from "react";


export default () => (
    <ServiceBlock
        color="#fffaf4"
        url="/dissertaciya-na-zakaz/doktorskaya"
        image={require('bsm-shared/static/images/block/9.jpg')}
        gradient="rgba(25, 84, 184, 0.95), rgba(25, 84, 184, 0.7)"
        title="Докторская диссертация"
        text={<div>
            <p>Актуальность и научная новизна</p>
            <p>Ваши и наши данные</p>
            <p>Строго конфиденциально</p>
            <p>Индивидуально</p>
        </div>}
        cards={[
            [
                servicecards["Прямая связь с автором"],
                servicecards["Публикации"],
                servicecards["Обзор литературы"],
            ],
        ]}
    />
);