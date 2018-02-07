import firebase from 'firebase';

// Actions

const LOAD_USERS = 'users/LOAD_USERS';

// Reducer

export default function reducer(state = {}, action = {}) {
    switch(action.type) {
        case LOAD_USERS: {
            return {  ...state };
        }
        default: {
            return state;
        }
    }
}

// Side effects

export function saveUser() {
    return dispatch => null;
}