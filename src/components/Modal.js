import {useContext} from  'react';
import ModalContext from '../context/ModalContext';

function Modal() {
    const {state, dispatch} = useContext(ModalContext);

    const close = (e) => {
        if(e.target.getAttribute("class") === 'modal'){
            dispatch({type:'CLOSE_MODAL'})
        }
    }
    return state.modalStatus ? (
        <div className='modal' onClick={close}>
            <div className="modal__body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Asperiores iste, reiciendis qui deserunt ipsam esse consequuntur 
                    perspiciatis voluptas accusamus, nihil commodi aperiam? 
                    Fuga odit quaerat perspiciatis nam labore vitae voluptatibus
                </p>
            </div>            
        </div>
    ): (""); 
}

export default Modal;
