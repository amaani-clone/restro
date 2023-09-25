import React, { useState } from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <img
          src="https://lh3.googleusercontent.com/nCMV0qMy4CjYS4TINPQP2irTjkM8khiv_Xyef5Vgo0miElWrAqH_Kbuz56j556H8EdfRUuFgdInBUfgvIZiFO73mzVT_Mkv51l3fGB87=w100-rw"
          alt=""
        ></img>
        {/* <FoodBankIcon />
        Khana Khazana... */}
      </Typography>
      <Divider></Divider>
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <IconButton
            color="inherit"
            area-aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Toolbar>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FoodBankIcon />
              Khana Khazana...
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>
                    <HomeIcon />
                    Home
                  </Link>
                  <Link to={"/menu"}>
                    <RestaurantMenuIcon />
                    Menu
                  </Link>
                  <Link to={"/about"}>
                    <InfoIcon />
                    About
                  </Link>
                  <Link to={"/contact"}>
                    <ContactPageIcon />
                    Contact
                  </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            varient="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          {/* <Box sx={{ p: 1 }}> */}
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
