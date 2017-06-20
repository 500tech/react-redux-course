import { SET_USER } from '../consts/action-types';

const initialState = {
    name: undefined
};

const reducer = (user = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return Object.assign({}, user, {
                name: action.name
            });

        default:
            return user;
    }
};

export default reducer;