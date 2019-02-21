import Form from './index'
import fields from 'bsm-shared/data/form/main';

export default () => (
    <Form
        formType="Узнай стоимость работы"
        targetID="estimate"
        title="Узнай стоимость работы прямо сейчас"
        redForm={true}
        buttonLabel="Оценить"
        fields={fields}
    />
);