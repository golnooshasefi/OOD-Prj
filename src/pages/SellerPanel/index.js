import classes from "./SellerPanel.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import SellerPanelSidebar from "./SellerPanelSidebar";

import { Outlet } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../store/UserContext";
import { Suspense } from "react";
import DotLoader from "react-spinners/DotLoader";
const override = `
  display: inline-block;
  margin: 20rem auto;
  grid-column: 1 / span 4;
`;
function SellerPanel() {
  const { user } = useContext(UserContext);
  console.log(user.auth, user.type);

  return (
    <>
      <MainNavigation />
      <div className={classes.SellerPanel}>
        <div className={classes.SellerPanel__container}>
          <SellerPanelSidebar />
          <Suspense
            fallback={
              <DotLoader
                data-testid="loader"
                color="#6667ab"
                css={override}
                size={80}
                margin={2}
              />
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default SellerPanel;
