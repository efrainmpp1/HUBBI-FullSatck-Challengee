import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Page404 } from "./screen/404";
import MassiveTransactionRegistration from "./screen/MassiveTransactionRegistration/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        path="/massive_transaction_registration"
        element={<MassiveTransactionRegistration />}
      />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

export default router;
