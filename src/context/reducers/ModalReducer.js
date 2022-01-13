import { OPEN_MODAL, CLOSE_MODAL } from "../types/ModalTypes";

const ModalReducer = (state, action) => {
  // reducer function ?
  if (action.type === OPEN_MODAL) {
    return { modalStatus: true };
  } else if (action.type === CLOSE_MODAL) {
    return { modalStatus: false };
  } else {
    return state;
  }
};

export default ModalReducer;
