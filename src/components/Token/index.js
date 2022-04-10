import React from "react";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Input, Container, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const Token = () => {
  return (
    <div>
      <Container>
        <Box sx={{ marginBottom: "20px", marginTop: "40px", FontFace: "bold" }}>
          <Typography variant="h3" color="blue" component="div">
            collection
          </Typography>
        </Box>
      </Container>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ heigth: "300px", width: "300px" }}>
          <IconButton>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Box>
        <Box sx={{ justifyContent: "center" }}>
          <Typography variant="h6" color="black" component="div">
            We recommend on image of at least 400*400. Gifs work too.
          </Typography>
          <Button
            // aria-describedby={id}
            variant="contained"
            // onClick={handleClick}
          >
            Choose File
          </Button>
        </Box>
      </Box>
      <Container>
        <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" color="black" component="div">
              Alternative text for NFT
            </Typography>
            <Typography variant="h5" color="gray" component="div">
              (optional)
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: "10px",
              marginTop: "30px"
            }}
          >
            <Typography variant="h7" color="gray" component="div">
              Image Description in details (do not start with word "image")
            </Typography>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              marginBottom: "30px",
              marginTop: "10px"
            }}
          >
            <Typography variant="h7" color="gray" component="div">
              Text that will be used in VoiceOver for People with disabillities
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container>
        <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" color="black" component="div">
              Alternative text for NFT
            </Typography>
            <Typography variant="h5" color="gray" component="div">
              (optional)
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: "10px",
              marginTop: "30px"
            }}
          >
            <Typography variant="h7" color="gray" component="div">
              Image Description in details (do not start with word "image")
            </Typography>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              marginBottom: "30px",
              marginTop: "10px"
            }}
          >
            <Typography variant="h7" color="gray" component="div">
              Text that will be used in VoiceOver for People with disabillities
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container>
        <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" color="black" component="div">
              Alternative text for NFT
            </Typography>
            <Typography variant="h5" color="gray" component="div">
              (optional)
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: "10px",
              marginTop: "30px"
            }}
          >
            <Typography variant="h7" color="gray" component="div">
              Image Description in details (do not start with word "image")
            </Typography>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              marginBottom: "30px",
              marginTop: "10px"
            }}
          >
            <Typography variant="h7" color="gray" component="div">
              Text that will be used in VoiceOver for People with disabillities
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined">Create collection</Button>
      </Box>
    </div>
  );
};
export default Token;
