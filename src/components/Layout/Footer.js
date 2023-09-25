import React from "react";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 1 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": { fontSize: "40px", cursor: "pointer", mr: 2 },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
          <YouTubeIcon />
          <GitHubIcon />
        </Box>
        <Typography
          variant="h8"
          sx={{ "@media(max-width:600px)": { fontSize: "1rem" } }}
        >
          All Right Reserved &copy; Khana-Khazana
        </Typography>
      </Box>
      <h1>Footer Comp</h1>
    </>
  );
};
export default Footer;
