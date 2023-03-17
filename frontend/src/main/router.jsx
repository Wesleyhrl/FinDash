import { Routes, Route, HashRouter } from "react-router-dom";
import DashBoard from '../dashboard/Dashboard';
import BillingCyle from '../billingCycle/BillingCycle';

export default function Router() {
    return (
        <Routes history={HashRouter}>
            <Route exact path="/" element={<DashBoard/>} />
            <Route path="/billingcyles" element={<BillingCyle/>} />
            <Route path="*" element={<DashBoard/>} />
        </Routes>
    )

}