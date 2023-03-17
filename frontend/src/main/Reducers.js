import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import {reducer as toastrReducer} from "react-redux-toastr";
import DashboardReducer from "../dashboard/DashboardReducer";
import TabReducer from "../common/tab/TabReducer.js";
import BillingCycleReducer from "../billingCycle/BillingCycleReducer.js";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer;