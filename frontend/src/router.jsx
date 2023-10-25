import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Page404 } from "./screen/404";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

export default router;
