import actions from './actionTypes';

const reducer: any = function (state = { counter: 0 }, action: any) {
    switch (action.type) {
        case actions.INCREMENT:
            if (state.counter !== 21) {
                return Object.assign(state, { counter: state.counter + 1 });
            } else {
                return Object.assign(state, { counter: state.counter });
            }

        case actions.DECREMENT:
            if (state.counter !== -9) {
                return Object.assign(state, { counter: state.counter - 1 });
            } else {
                return Object.assign(state, { counter: state.counter });
            }
        case actions.RESET:
            return Object.assign(state, { counter: state.counter = 0 });
        default:
            return state;
    }
};

export default reducer;
