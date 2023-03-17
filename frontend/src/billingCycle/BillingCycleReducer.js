const INITIAL_STATE = {list: []}

export default function BillingCycleReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}