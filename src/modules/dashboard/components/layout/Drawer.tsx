import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LastPageOutlinedIcon from "@mui/icons-material/LastPageOutlined";
import FirstPageOutlinedIcon from "@mui/icons-material/FirstPageOutlined";

import {
  Typography,
  Divider,
  Avatar,
  Card,
  Badge,
  Tooltip,
  Button,
} from "@mui/material";
import DashboardNavLinks from "./DashboardNavLinks";

import { useTranslation } from "react-i18next";
import { ColorModeContext } from "@/modules/common/hooks/useDarkMode";
import { APP_CONFIG } from "@/core/config/app.config";

import { navigationItems } from "../../data/navigation-links";
import { MessageOutlined, NotificationsOutlined } from "@mui/icons-material";
import { BsPaypal } from "react-icons/bs";
const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (
  theme: Theme,
  miniSizedDrawerWidth: number
): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: "hidden",
  width: miniSizedDrawerWidth + "px",
  [theme.breakpoints.up("sm")]: {
    width: miniSizedDrawerWidth + "px",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) =>
    prop !== "drawerWidth" && prop !== "miniSizedDrawerWidth",
})<{ drawerWidth: number; miniSizedDrawerWidth: number }>(
  ({ theme, open, drawerWidth, miniSizedDrawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    border: "none",
    ...(open && {
      ...openedMixin(theme, drawerWidth),
      "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
    }),
    ...(!open && {
      ...closedMixin(theme, miniSizedDrawerWidth),
      "& .MuiDrawer-paper": closedMixin(theme, miniSizedDrawerWidth),
    }),
  })
);
interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  mobileDrawerOpen: boolean;
  setMobileDrawerOpen: (value: boolean) => void;
  drawerFullWidth: number;
  miniSizedDrawerWidth: number;
}

export default function DrawerSidebar({
  open,
  setOpen,
  mobileDrawerOpen,
  setMobileDrawerOpen,
  drawerFullWidth,
  miniSizedDrawerWidth,
}: Props) {
  const [, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const [open, setOpen] = React.useState(false);
  // const [isMobileDrawerOpen, setMobileDrawerOpen] = React.useState(false)
  const { mode, setMode } = React.useContext(ColorModeContext);

  const drawerWidth = React.useMemo(
    () => (open ? drawerFullWidth : miniSizedDrawerWidth),
    [drawerFullWidth, miniSizedDrawerWidth, open]
  );
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const LogoImage = styled("img")(({ theme }) => ({

  return (
    <>
      <Drawer
        miniSizedDrawerWidth={miniSizedDrawerWidth}
        variant="permanent"
        open={open}
        sx={{
          overflow: "visible",
          "& .MuiPaper-root": { overflow: "visible" },
        }}
        drawerWidth={drawerWidth}
        slotProps={{
          paper: {
            elevation: 0,
            variant: "elevation",

            sx: (t) => ({
              border: "none",
              backgroundColor: t.palette.background.default,
              overflowX: "visible",
              borderRadius: 0,
              display: {
                xs: "none",
                lg: "block",
              },
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "10px",
                display: "none",
              },
              "&::-webkit-scrollbar-thumb": {
                bgcolor: t.palette.divider,
                display: "none",
              },
            }),
          },
        }}
      >
        <DrawerHeader>
          <Box
            display={"flex"}
            flexDirection={open ? "row" : "column"}
            justifyContent={open ? "space-between" : "center"}
            width={"100%"}
            alignItems={"center"}
            gap={2}
            pt={open ? 0 : 2}
            px={1}
          >
            {/* <img alt="test" width="48" src="/logo.svg" /> */}
            <Box display="flex" alignItems="center" columnGap={2}>
              <img src={APP_CONFIG.APP_LOGO} width={40}></img>
              {open && (
                <Typography fontWeight={"800"} fontSize={16}>
                  {APP_CONFIG.APP_NAME}
                </Typography>
              )}
            </Box>
            <IconButton
              size="small"
              color="primary"
              sx={{
                backgroundColor: (t) => t.palette.background.paper,
                border: (t) => `1px solid ${t.palette.divider}`,
                borderRadius: `100%`,
              }}
              onClick={() => (open ? handleDrawerClose() : handleDrawerOpen())}
            >
              {!open ? (
                <FirstPageOutlinedIcon sx={{ fontSize: 20 }} />
              ) : (
                <LastPageOutlinedIcon sx={{ fontSize: 20 }} />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Box sx={{ overflow: "auto" }}>
          <DashboardNavLinks items={navigationItems} fullWidth={open} />
        </Box>
      </Drawer>

      {/* Mobile Drawer  */}
      <MuiDrawer
        onClose={() => setMobileDrawerOpen(false)}
        open={mobileDrawerOpen}
        ModalProps={{
          sx: {
            zIndex: 2500,
          },
        }}
        // SlideProps={
        //   {
        //     sx: (t: Theme) => ({
        //       backgroundColor: t.palette.background.default,
        //       width: 300,
        //     }),
        //     elevation: 0,
        //   } as any
        // }
      >
        <DrawerHeader>
          <Box
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            alignItems={"center"}
            gap={3}
            px={1}
          >
            <img alt="test" style={{ width: 30 }} src={APP_CONFIG.APP_LOGO} />

            <Typography fontWeight={"bold"} variant="h5">
              {APP_CONFIG.APP_NAME}
            </Typography>
          </Box>
        </DrawerHeader>
        <Divider sx={{ mb: 1 }}></Divider>
        <Box>
          <DashboardNavLinks items={navigationItems} fullWidth={true} />
          <Divider sx={{ mb: 2 }}></Divider>

          <Card sx={{ padding: 2, margin: 2 }}>
            <Box
              alignItems={"center"}
              display={"flex"}
              justifyContent={"flex-start"}
              gap="10px"
            >
              <IconButton onClick={handleClick} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/user.jpg" />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>user Name</Typography>
                <Typography variant="caption" color="GrayText">
                  Admin
                </Typography>
              </Box>
            </Box>

            <Box display={{ xs: "flex" }} mt={2} flexWrap={"wrap"} gap={2}>
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
            </Box>
          </Card>
        </Box>
        <Divider sx={{ mb: 2 }}></Divider>
      </MuiDrawer>
    </>
  );
}
