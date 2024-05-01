import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";
import {
  AppNavigationProvider,
  createNavigationContext,
} from "../router/router";

export default () => {
  const navigationContext = createNavigationContext();
  return (
    <>
      <AppNavigationProvider value={navigationContext}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Header accountName="Test" subscriptionDaysLeft="1" />
          <Outlet></Outlet>
        </Box>
      </AppNavigationProvider>
    </>
  );
};
