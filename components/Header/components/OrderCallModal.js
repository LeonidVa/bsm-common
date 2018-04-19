import React, { Component } from 'react';

import './OrderCallModal.scss';

class OrderCall extends Component{

    state = {
        name: '',
        phone: '',
        display: 'none'
    }
    handleForm=(e)=>{
        const { name, phone } = this.state;
        e.preventDefault()

        console.log('позвоните мне ' + phone +', ' + name)

        this.props.closeModal()
    }

    componentWillReceiveProps =(nextProps, nextState)=>{

        if(nextProps.display !== this.state.display){
            this.setState({display: nextProps.display})
        }
    }

    handleClickOutside =(event) =>{
        if (event.target.className === 'modal__order-call') {

            this.props.closeModal()
        }
    }


    render(){
        const { name, phone, display } = this.state;
        return(
            <div className="modal__order-call" 
                 style={{ display: display }} onClick={this.handleClickOutside}>
                <div className="block-form block-form2 modal-form">
                   
                    <h2 className="block-form__title">Заказать звонок</h2>
                    <form className="block-form__form" onSubmit={this.handleForm}>
                        <div className="block-form__item">
                            <label htmlFor="form-name">Имя*</label>
                            <input type="text" 
                                   name="" 
                                   id="form-name" 
                                   placeholder="Ваше имя" 
                                   required
                                   value={name}
                                   onChange={(e)=>this.setState({name: e.target.value})} 
                                   />
                        </div>
                        <div className="block-form__item">
                            <label htmlFor="form-phone">Телефон*</label>
                            <input type="text" 
                                   name="" 
                                   id="form-phone" 
                                   placeholder="Ваш телефон" 
                                   required 
                                   value={phone}
                                   onChange={(e) => this.setState({ phone: e.target.value })}/>
                        </div>
                        
                        <button type="submit" className="block-form__btn">Позвоните мне!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default OrderCall