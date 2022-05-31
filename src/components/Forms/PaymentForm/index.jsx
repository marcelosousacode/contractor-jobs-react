import Input from "../Input";
import { useReducer } from "react";
import { Form } from "react-bootstrap";
import Button from "../../general/Button";
import Select from "../Select";

const initialState = {
    codeCard: '',
    typeCard: '',
    numberCard: '',
    expirationAt: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_code_card':
            return { ...state, codeCard: action.payload }
        case 'change_type':
            return { ...state, typeCard: action.payload }
        case 'change_number_card':
            return { ...state, numberCard: action.payload }
        case 'change_expiration_at':
            return { ...state, expirationAt: action.payload }
        default:
            return { state }
    }
}

const PaymentForm = () => {
    const [payment, dispatch] = useReducer(reducer, initialState);
    const options = [{
        value: null,
        label: 'Selecione o tipo'
    }, {
        value: 'credit',
        label: 'Crédito'
    }, {
        value: 'debt',
        label: 'Débito'
    }]

    return (
        <Form className={'d-flex flex-wrap gap-4'}>
            <Select
                options={options}
                name={'type_card'}
                label={'Tipo de pagamento'}
                onChange={e => dispatch({ type: 'change_type', payload: e.target.value })}
            />

            <Input
                type='text'
                label='Código do Cartão'
                value={payment.codeCard}
                onChange={e => dispatch({ type: 'change_code_card', payload: e.target.value })}
                inputName={'code_card'}
                inputStyle={''}
                stylization={''}
                placeholder={'Digite o código do cartão...'}
            />

            <Input
                type='text'
                label='Numero do Cartão'
                value={payment.numberCard}
                onChange={e => dispatch({ type: 'change_number_card', payload: e.target.value })}
                inputName={'number_card'}
                placeholder={'Digite o número cartão...'}
            />

            <Input
                type='date'
                label='Data de Expiração'
                value={payment.expirationAt}
                onChange={e => dispatch({ type: 'change_expiration_at', payload: e.target.value })}
                inputName={'expiration_at'}
                placeholder={'Selecione a data de expiração...'}
            />

            <div style={{ width: '100%' }} className='d-flex gap-4 pt-4 border-top justify-content-end'>
                <Button variant="info px-5" fn={e => e.preventDefault()} label={'Cancelar'} />
                <Button variant="primary px-5" fn={e => e.preventDefault()} label={'Finalizar operação'} />
            </div>
        </Form>
    );
}

export default PaymentForm;