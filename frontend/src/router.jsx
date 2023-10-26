import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Page404 } from "./screen/404";
import MassiveTransactionRegistration from "./screen/MassiveTransactionRegistration/index";
import TransactionHistory from "./screen/TransactionHistory";
import Home from "./screen/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route
        path="/massive_transaction_registration"
        element={<MassiveTransactionRegistration />}
      />
      <Route path="/transaction_history" element={<TransactionHistory />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

export default router;
