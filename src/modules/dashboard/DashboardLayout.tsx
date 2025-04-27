import { BiMenuAltRight } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsPaypal } from "react-icons/bs";
import * as React from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import DrawerSidebar from "./components/layout/Drawer";
// import { ErrorElement } from "../components/ErrorElement";
import { useLocalStorage } from "usehooks-ts";
import { MessageOutlined, NotificationsOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
// import { useNetworkState } from "../hooks/useNetworkState";
// import { QueryParamProvider } from "use-query-params";
// import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
// import ErrorBoundary from "../components/ErrorBoundary";
// import ConnectionError from "../components/ConnectionError";

const drawerFullWidth = 240;
const miniSizedDrawerWidth = 80;

const DashboardLayout = (props: React.PropsWithChildren) => {
  const { t } = useTranslation();
  const [open, setOpen] = useLocalStorage("drawer", false);
  const [isMobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const drawerWidth = React.useMemo(
    () => (open ? drawerFullWidth : miniSizedDrawerWidth),
    [open]
  );

  return (
    <Box
      id="dashboard-layout"
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        transition: "0.3s",
        position: "relative",
        flexDirection: "column",
        width: { xs: "100%", lg: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, lg: drawerWidth + "px" },
      }}
    >
      <CssBaseline />

      <DrawerSidebar
        drawerFullWidth={drawerFullWidth}
        miniSizedDrawerWidth={miniSizedDrawerWidth}
        open={open}
        setOpen={(value) => setOpen(value)}
        mobileDrawerOpen={isMobileDrawerOpen}
        setMobileDrawerOpen={(value) => setMobileDrawerOpen(value)}
      />

      <Box
        id="dashboard-main"
        component="main"
        sx={{
          overflow: "auto",
          flexGrow: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          pb: 2,
          px: 4,
          pt: { xs: 2, lg: 2 },
        }}
      >
        <Box display="flex" justifyContent={"space-between"} mb={2}>
          <Box
            className="left"
            display={"flex"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton
              onClick={() => setMobileDrawerOpen(!isMobileDrawerOpen)}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                marginInlineEnd: 1,
                display: {
                  lg: "none",
                },
              }}
            >
              <BiMenuAltRight />
            </IconButton>
          </Box>

          <Box display={"flex"} gap={2}>
            <TextField
              placeholder={t("app.searchForUser")}
              slotProps={{
                input: {
                  startAdornment: <FiSearch style={{ marginLeft: "5px" }} />,
                },
              }}
            >
              {" "}
            </TextField>
            <TextField
              placeholder={t("app.searchForNumber")}
              slotProps={{
                input: {
                  startAdornment: <FiSearch style={{ marginLeft: "5px" }} />,
                },
              }}
            >
              {" "}
            </TextField>
          </Box>

          <Box display={{ xs: "none", md: "flex" }} gap={1}>
            <Badge color="error" badgeContent={5}>
              <IconButton
                // size="small"
                sx={{
                  aspectRatio: "1/1",
                  height: 35,
                  backgroundColor: "#eeeeee",
                }}
              >
                <MessageOutlined style={{ fontSize: 20 }}></MessageOutlined>
              </IconButton>
            </Badge>

            <Badge color="error" badgeContent={12}>
              <IconButton
                sx={{
                  aspectRatio: "1/1",
                  height: 35,
                  backgroundColor: "#eeeeee",
                }}
              >
                <NotificationsOutlined
                  style={{ fontSize: 20 }}
                ></NotificationsOutlined>
              </IconButton>
            </Badge>

            <Badge color="error" badgeContent={33}>
              <IconButton
                sx={{
                  aspectRatio: "1/1",
                  height: 35,
                  backgroundColor: "#eeeeee",
                }}
              >
                <BsPaypal
                  style={{ fontSize: 20, color: "blueviolet" }}
                ></BsPaypal>
              </IconButton>
            </Badge>
            <Badge color="error" badgeContent={33}>
              <IconButton
                sx={{
                  aspectRatio: "1/1",
                  height: 35,
                  backgroundColor: "#eeeeee",
                }}
              >
                <BsPaypal style={{ fontSize: 20, color: "red" }}></BsPaypal>
              </IconButton>
            </Badge>
            <Tooltip title={t("ui.profile")}>
              <Button
                size="small"
                color="inherit"
                sx={{
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                }}
              >
                <Avatar
                  sx={{ height: "35px", width: "35px" }}
                  alt="Remy Sharp"
                />
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      lg: "flex",
                    },
                    flexDirection: "column",
                  }}
                >
                  <Typography textTransform={"capitalize"}>John Doe</Typography>
                </Box>
              </Button>
            </Tooltip>
          </Box>
        </Box>
        <Box>{props.children}</Box>
        {/* : <ConnectionError />} */}
        {/* </ErrorBoundary>
          </QueryParamProvider> */}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
