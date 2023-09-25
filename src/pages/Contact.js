import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <Layout
      data={
        <div>
          <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
            <Typography variant="h4">Contact My Resturant</Typography>
            <p>lorem30</p>
          </Box>
          <Box
            sx={{
              m: 3,
              width: "600px",
              ml: 10,
              "@media (max-width:600px)": {
                width: "300px",
              },
            }}
          >
            <TableContainer component={Paper}>
              <Table aria-label="contact table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ bgcolor: "black", color: "white" }}
                      align="center"
                    >
                      Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <SupportAgentIcon sx={{ color: "red", pt: 1 }} />{" "}
                      1800-00-1997 (tollfree)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                      anishp1997@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CallIcon sx={{ color: "green", pt: 1 }} /> 8287819877,
                      8395837662
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      }
    ></Layout>
  );
};
export default Contact;
