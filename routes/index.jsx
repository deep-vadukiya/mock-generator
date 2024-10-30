//

import { useRoutes } from "react-router-dom";
//
import { APP_PATH } from "./paths";
// common components
import CommonHeader from "../components/CommonHeader";
// pages
import LandingPage from "../pages/landingPage";
import CardMock from "../pages/cardsMock";
import BankMock from "../pages/bankMock";

// ------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <CommonHeader />,
      children: [
        { path: APP_PATH.landingPath, element: <LandingPage /> },
        { path: APP_PATH.cardMockRoute, element: <CardMock /> },
        {
          path: APP_PATH.bankDetailsMockRoute,
          element: <BankMock />,
        },
      ],
    },
  ]);
}
