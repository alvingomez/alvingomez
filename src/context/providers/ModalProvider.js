import {useState, useReducer} from 'react';
import ModalContext from '../ModalContext';
import ModalReducer from "../reducers/ModalReducer";
import {OPEN_MODAL, CLOSE_MODAL} from '../types/ModalTypes';

function ModalProvider(props) {
   
    /**This is the place where modelStatus was declared and  assigned a false value. */
    // const [state, dispatch] = useState({ modelStatus: false });
 
   /**useReducer Hook
    SYNTAX:
       const [state, dispatch] = useReducer(reducer, initialArg, init) 
   **/
    const [state, dispatch] = useReducer(ModalReducer, {modalStatus:false});

    return  (
        <ModalContext.Provider value={{state, dispatch}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
