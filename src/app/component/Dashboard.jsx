"use client";
import * as React from "react";
import { extendTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Settings } from "@mui/icons-material";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import DashboardComp from "../dashComponent/DashboardComp";
import Setting from "../dashComponent/Setting";


const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  // {
  //   segment: "settings",
  //   title: "Settings",
  //   icon: <Settings />, 
  // },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

function DashboardContent({ pathname }) {
  switch (pathname) {
    case "/dashboard":
      return <DashboardComp />;
    case "/settings":
      return <Setting />;
    default:
      return <div>Page not found. Please select a valid route.</div>;
  }
}

export default function Dashboard(props) {
  const router = useDemoRouter("/dashboard");

  return (
    <div>
      <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}   branding={{
    logo: <img src="/logo.png" alt="MUI logo" />,
    title: 'TopTeam Technologies Limited',
  }}>
        <DashboardLayout>
          <PageContainer>
            <DashboardContent pathname={router.pathname} />
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}
