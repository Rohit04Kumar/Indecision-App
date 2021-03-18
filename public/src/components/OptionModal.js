import React from 'react';
import Modal from 'react-modal';


 

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel = "selected option"
        ariaHideApp={false}
        onRequestClose = {props.handleClearSelectedOption}
        closeTimeoutMS = {200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button 
            onClick={props.handleClearSelectedOption}
            className="button"
            >
                Okay
            </button>
    </Modal>
    
)

export default OptionModal;