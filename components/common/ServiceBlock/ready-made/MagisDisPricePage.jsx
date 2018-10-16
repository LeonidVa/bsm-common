import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/magisDis";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        url="#form"
        image={require('static/images/block/k.jpg')}
        title="От эссе до настоящей диссертации"
        text={<div>
            <p>Уникальные авторские работы</p>
            <p>Сложные и срочные</p>
            <p>Технические и креативные</p>
            <p>На иностранных языках</p>
        </div>}
    />
);