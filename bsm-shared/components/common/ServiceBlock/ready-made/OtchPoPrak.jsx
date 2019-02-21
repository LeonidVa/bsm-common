import ServiceBlock from 'bsm-shared/components/common/ServiceBlock'
import servicecards from "bsm-shared/data/serviceBlock/otchPoPrak";
import React from "react";


export default () => (
    <ServiceBlock
        color="#f5f5f5"
        url="#form"
        image={require('bsm-shared/static/images/block/otch-prakrik1.jpg')}
        gradient="rgba(141, 50, 85, 0.95), rgba(141, 50, 85, 0.7)"
        title="Отчет по практике"
        text={<div>
            <p>Не парься сам – доверься нам!</p>
            <p>Легко разберёшься, точно сдашь!</p>
            <p>От 3 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Курсовая работа"],
                servicecards["Реферат"],
                servicecards["Эссе Контрольная"],
                servicecards["Экзамены Тесты"],
                servicecards["Курсовой проект"],
            ],
        ]}
    />
);