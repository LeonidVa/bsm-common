import ServiceBlock from 'bsm-shared/components/common/ServiceBlock'
import servicecards from "bsm-shared/data/serviceBlock/matzashDisser";


export default () => (
    <ServiceBlock
        color="#333333"
        url=""
        image={require('bsm-shared/static/images/block/10.jpg')}
        gradient="rgba(213, 222, 231, 0.95), rgba(213, 222, 231, 0.7)"
        title="Материалы для успешной защиты"
        text={<div>
            <p>Эффектная презентация</p>
            <p>Быстро и качественно</p>
            <p>С нами твоя защита пройдет легко!</p>
        </div>}
        cards={[
            [
                servicecards["Монография"],
                servicecards["Автореферат"],
                servicecards["Оригинальность"],
                servicecards["По главам"],
            ],
            [
                servicecards["Ответы к защите"],
                servicecards["Доклад Слайды"],
                servicecards["Аннотация Отзыв Рецензия"],
                servicecards["Плакаты к защите"],
                servicecards["Распечатка Переплеты"],
            ],
        ]}
    />
);