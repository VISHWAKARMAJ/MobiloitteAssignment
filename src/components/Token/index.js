import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Input, Container, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Token = (props) => {
  const { handleChange } = props;

  const Input = styled("input")({
    display: "none"
  });

  return (
    <div>
      <Box sx={{ heigth: "1200px", width: "500px", borderRadius: "20px" }}>
        <Container>
          <Box
            sx={{ marginBottom: "20px", marginTop: "40px", FontFace: "bold" }}
          >
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
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <Input
                  onChange={handleChange}
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </Stack>
          </Box>
        </Box>
        <Container>
          <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h5" color="black" component="div">
                Display name
              </Typography>
              <Typography variant="h5" color="gray" component="div">
                (required)
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: "10px",
                marginTop: "30px"
              }}
            >
              <Typography variant="h7" color="gray" component="div">
                Enter token name
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
                Token name connot be changed in future
              </Typography>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h5" color="black" component="div">
                Symbol
              </Typography>
              <Typography variant="h5" color="gray" component="div">
                (required)
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: "10px",
                marginTop: "30px"
              }}
            >
              <Typography variant="h7" color="gray" component="div">
                Enter token Symbol
              </Typography>
            </Box>
            <Divider></Divider>
            <Box
              sx={{
                marginBottom: "30px",
                marginTop: "10px"
              }}
            ></Box>
          </Box>
        </Container>

        <Container>
          <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h5" color="black" component="div">
                Description
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
                Spread some words about your token collection
              </Typography>
            </Box>
            <Divider></Divider>
            <Box
              sx={{
                marginBottom: "30px",
                marginTop: "10px"
              }}
            >
              {/* <Typography variant="h7" color="gray" component="div">
              Text that will be used in VoiceOver for People with disabillities
            </Typography> */}
            </Box>
          </Box>
        </Container>
        <Container>
          <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h5" color="black" component="div">
                short url
              </Typography>
              <Typography variant="h5" color="gray" component="div">
                {/* (optional) */}
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: "10px",
                marginTop: "30px"
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography variant="h6" color="black" component="div">
                  funglt.com/
                </Typography>
                <Typography variant="h6" color="gray" component="div">
                  Enter short url{" "}
                </Typography>
              </Box>
            </Box>
            <Divider></Divider>
            <Box
              sx={{
                marginBottom: "30px",
                marginTop: "10px"
              }}
            >
              <Typography variant="h7" color="gray" component="div">
                will be used as public URL
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px"
          }}
        >
          <Button variant="contained">Create collection</Button>
        </Box>
      </Box>
    </div>
  );
};
export default Token;
