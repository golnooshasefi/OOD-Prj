import classes from "./UserPanel.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import Sidebar from "./Sidebar";
import DotLoader from "react-spinners/DotLoader";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const override = `
  display: inline-block;
  margin: 20rem auto;
  grid-column: 1 / span 4;
`;

function UserPanel() {
  return (
    <>
      <MainNavigation />
      <div className={classes.SellerPanel}>
        <div className={classes.SellerPanel__container}>
          <Sidebar />
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

export default UserPanel;
