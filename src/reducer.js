const initialState = {
    qntyProducts: 0,
    qntyClients: 0,
};

const reducer = (state = initialState, action) => {
    console.log(action, state);
    if (action.type === 'ADD_PRODUCT')
        return {
            ...state,
            qntyProducts: state.qntyProducts + 1
        };
    if (action.type === 'SUB_PRODUCT')
        return {
            ...state,
            qntyProducts: state.qntyProducts - 1
        };
    if (action.type === 'ADD_CLIENT')
        return {
            ...state,
            qntyClients: state.qntyClients + 1
        };
    if (action.type === 'SUB_CLIENT')
        return {
            ...state,
            qntyClients: state.qntyClients - 1
        };
    return {
        ...state
    };
};

export {reducer};
