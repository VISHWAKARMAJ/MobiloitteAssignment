import { Button, Divider, Stack } from "@mui/material";
import "./styles.css";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Token from "./components/Token";
import Common from "./components/common";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 12
  }
}));
const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF"
    }
  }
});
const pages = [
  "Explore",
  "myItems",
  "Following",
  "Activity",
  "How it work",
  "community"
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const ResponsiveAppBar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <StyledToolbar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 0 }}>
                <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  LOGO
                </Typography>
              </Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    variant="h6"
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "gray", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <IconButton>
                {/* <Avatar> */}
                <NotificationsIcon />
                {/* </Avatar> */}
              </IconButton>
              <Box
                sx={{
                  padding: "0px",
                  border: "2px solid",
                  width: "70px",
                  borderRadius: "45px",
                  borderColor: "blue",
                  backgroundColor: "blue"
                }}
              >
                0 token
                {/* <Token /> */}
              </Box>

              {/* <Tooltip> */}
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              {/* </Tooltip> */}
            </Toolbar>
          </Container>
        </StyledToolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Common />
    </div>
  );
}
