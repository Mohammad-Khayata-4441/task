import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LastPageOutlinedIcon from "@mui/icons-material/LastPageOutlined";
import FirstPageOutlinedIcon from "@mui/icons-material/FirstPageOutlined";

import {
  Badge,
  Typography,
  Divider,
  Avatar,
  Tooltip,
  Card,
  Button,
} from "@mui/material";
import DashboardNavLinks from "./DashboardNavLinks";

import { useTranslation } from "react-i18next";
import { ColorModeContext } from "@/modules/common/hooks/useDarkMode";
import { APP_CONFIG } from "@/core/config/app.config";
import {
  Add,
  DarkMode,
  LightMode,
  Logout,
  Notifications,
  Settings,
} from "@mui/icons-material";
import { navigationItems } from "../../data/navigation-links";
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

  const { i18n } = useTranslation();

  // const [open, setOpen] = React.useState(false);
  // const [isMobileDrawerOpen, setMobileDrawerOpen] = React.useState(false)
  const { mode, setMode } = React.useContext(ColorModeContext);
  const toggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
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

            <Box
              alignItems={"center"}
              display={"flex"}
              justifyContent={"space-between"}
              mt={2}
            >
              <Tooltip title="Add another account">
                <IconButton
                  sx={{
                    border: "1px solid #dddddd",
                    borderRadius: "4px",
                  }}
                >
                  <Add />
                </IconButton>
              </Tooltip>
              <Tooltip title="Settings">
                <IconButton
                  sx={{
                    border: "1px solid #eeeeee",
                    borderRadius: "4px",
                  }}
                >
                  <Settings />
                </IconButton>
              </Tooltip>
              <Tooltip title="Notification">
                <IconButton
                  sx={{
                    border: "1px solid #eeeeee",
                    borderRadius: "4px",
                  }}
                >
                  <Badge
                    variant="standard"
                    color="error"
                    badgeContent={5}
                    sx={{ width: "max-content" }}
                  >
                    <Notifications></Notifications>
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Logout">
                <IconButton
                  sx={{
                    border: "1px solid #eeeeee",
                    borderRadius: "4px",
                  }}
                >
                  <Logout />
                </IconButton>
              </Tooltip>
            </Box>
          </Card>

          <Card sx={{ padding: 2, marginX: 2 }}>
            <Box
              alignItems={"center"}
              display={"flex"}
              justifyContent={"space-between"}
              gap={3}
            >
              <Button
                onClick={() => i18n.changeLanguage("ar")}
                variant={i18n.language === "ar" ? "contained" : "outlined"}
                startIcon={<img src="/saudi.svg" alt="" width={20} />}
              >
                Arabic
              </Button>
              <Button
                onClick={() => i18n.changeLanguage("en")}
                variant={i18n.language !== "ar" ? "contained" : "outlined"}
                startIcon={<img src="/usa.png" alt="" width={20} />}
              >
                English
              </Button>
            </Box>
          </Card>
          <Card sx={{ padding: 2, marginX: 2 }}>
            <Box
              alignItems={"center"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                onClick={() => toggle()}
                variant={mode === "dark" ? "outlined" : "contained"}
                startIcon={<LightMode />}
              >
                Light
              </Button>
              <Button
                onClick={() => toggle()}
                variant={mode === "dark" ? "contained" : "outlined"}
                startIcon={<DarkMode />}
              >
                Dark
              </Button>
            </Box>
          </Card>
        </Box>
        <Divider sx={{ mb: 2 }}></Divider>
      </MuiDrawer>
    </>
  );
}
