import * as actions from '../actions/actionType';
let lastId = 0;
const bugReducer = (state = [], action) => {
    switch(action.type){
        case actions.bugAdded:
            return [
                ...state,
                {
                    id: ++lastId,
                    desc: action.payload.desc,
                    resolved: false
                }
            ]
        case actions.bugRemoved:
            return state.filter(bug => bug.id !== action.payload.id);

        case actions.bugResolved:
            return state.map(bug => bug.id !== action.payload.id ? bug: {...bug, resolved: true});
        default:
            return state;
    }
}

export default bugReducer;