import {useState, useReducer} from 'react';
import ModalContext from '../ModalContext';

function ModalProvider(props) {
   
    /**This is the place where modelStatus was declared and  assigned a false value. */
    // const [state, dispatch] = useState({ modelStatus: false });
 
   /**useReducer Hook
    SYNTAX:
       const [state, dispatch] = useReducer(reducer, initialArg, init) 
   **/
    const [state, dispatch] = useReducer((state, action) => {
        // reducer function ?
        if(action.type === 'OPEN_MODAL'){
            return {modalStatus:true}
        }
        else if(action.type === 'CLOSE_MODAL'){
            return {modalStatus:false}
        }
        else{
            return state;
        }        
    }, {modalStatus:false});

    return  (
        <ModalContext.Provider value={{state, dispatch}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
