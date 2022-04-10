import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Input, Container, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import MusicNoteTwoToneIcon from "@mui/icons-material/MusicNoteTwoTone";
import GamesTwoToneIcon from "@mui/icons-material/GamesTwoTone";
import TransformTwoToneIcon from "@mui/icons-material/TransformTwoTone";
import HomeMiniTwoToneIcon from "@mui/icons-material/HomeMiniTwoTone";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import HdTwoToneIcon from "@mui/icons-material/HdTwoTone";
import WaterDamageTwoToneIcon from "@mui/icons-material/WaterDamageTwoTone";
import AirlineSeatLegroomExtraTwoToneIcon from "@mui/icons-material/AirlineSeatLegroomExtraTwoTone";
import CameraEnhanceTwoToneIcon from "@mui/icons-material/CameraEnhanceTwoTone";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import Stack from "@mui/material/Stack";
import Token from "../Token";

const Common = () => {
  const [file, setFile] = useState({});
  const [file1, setFile1] = useState("");

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1300px",
          justifyContent: "center",
          alignItem: "center"
        }}
      >
        <Container>
          <Box
            sx={{ marginBottom: "20px", marginTop: "40px", FontFace: "bold" }}
          >
            <Typography variant="h3" color="black" component="div">
              Create your collection
            </Typography>
          </Box>
        </Container>

        <Container>
          <Box
            sx={{
              display: "flex",
              maxWidth: "1300px",
              justifyContent: "center",
              alignItem: "center"
            }}
          >
            <Box>
              <Container>
                <Box sx={{ marginBottom: "20px", marginTop: "40px" }}>
                  <Typography variant="h5" color="black" component="div">
                    uploade file
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItem: "center",
                    borderStyle: "dotted",
                    borderRadius: "30px",
                    height: "250px",
                    width: "600px"
                  }}
                >
                  <Button> JPG,PNG,GIF,WEBP,MP4 OR MP3, Max 100mb</Button>
                  <Button>(620 * 620 recommended)</Button>
                  <Container>
                    <Button
                      aria-describedby={id}
                      variant="contained"
                      onClick={handleClick}
                    >
                      upload file
                    </Button>

                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                      }}
                    >
                      <Token handleClose={handleClose} />
                    </Popover>
                  </Container>
                </Box>
                {<img src={file} alt="" />}
              </Container>

              <Container>
                <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
                  <Typography variant="h5" color="black" component="div">
                    uploade cover
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItem: "center",
                    borderStyle: "dotted",
                    borderRadius: "30px",
                    height: "250px",
                    width: "600px"
                  }}
                >
                  <Button variant="" type="file">
                    JPG,PNG,GIF,WEBP,MP4 OR MP3, Max 100mb
                  </Button>
                  <Container>
                    <Container>
                      <Button
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                      >
                        upload cover
                      </Button>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left"
                        }}
                      >
                        <Token handleChange={handleChange} />
                      </Popover>
                      <Container></Container>
                    </Container>
                  </Container>
                </Box>
              </Container>

              <Container>
                <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
                  <Typography variant="h5" color="black" component="div">
                    Item Category
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={4} md={4}>
                      <BubbleChartIcon />
                      BubbleChartIcon
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <MusicNoteTwoToneIcon />
                      MusicNoteTwoToneIcon
                      {/* <Item></Item> */}
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <GamesTwoToneIcon /> GamesTwoToneIcon
                      {/* <Item>xs=6 md=4</Item> */}
                    </Grid>

                    <Grid item xs={4} md={4}>
                      <TransformTwoToneIcon />
                      TransformTwoToneIcon
                      {/* <Item>xs=6 md=8</Item> */}
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <HomeMiniTwoToneIcon />
                      HomeMiniTwoToneIcon
                      {/* <Item>xs=6 md=4</Item> */}
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <AcUnitTwoToneIcon />
                      AcUnitTwoToneIcon
                      {/* <Item>xs=6 md=4</Item> */}
                    </Grid>

                    <Grid item xs={4} md={4}>
                      <HdTwoToneIcon />
                      HdTwoToneIcon
                      {/* <Item>xs=6 md=8</Item> */}
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <WaterDamageTwoToneIcon />
                      WaterDamageTwoToneIcon
                      {/* <Item>xs=6 md=4</Item> */}
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <AirlineSeatLegroomExtraTwoToneIcon />
                      AirlineSeat
                      {/* <Item>xs=6 md=4</Item> */}
                    </Grid>
                  </Grid>
                </Box>
              </Container>

              {/* Enter price to allow users instanlty purchase your NFT */}

              <Container>
                <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
                  <Typography variant="h6" color="black" component="div">
                    Enter price to allow users instanlty purchase your NFT
                  </Typography>
                </Box>
              </Container>

              <Box sx={{ display: "flex" }}>
                <Container>
                  <Box
                    sx={{
                      // display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      border: "1px solid",
                      borderRadius: "30px",
                      height: "200px",
                      width: "250px"
                    }}
                  ></Box>
                </Container>
                <Container>
                  <Box
                    sx={{
                      // display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      border: "1px solid",
                      borderRadius: "30px",
                      height: "200px",
                      width: "250px"
                    }}
                  ></Box>
                </Container>
              </Box>

              {/* price */}
              <Container>
                <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
                  <Typography variant="h5" color="black" component="div">
                    Price
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                    marginTop: "20px",
                    fontSize: "20px"
                  }}
                >
                  <Typography variant="h7" color="gray" component="div">
                    0.054
                  </Typography>

                  <Typography variant="h7" color="gray" component="div">
                    ETH
                  </Typography>
                </Box>
                <Divider></Divider>
              </Container>
              <Box sx={{ display: "flex", margin: "10px" }}>
                <Typography variant="h7" color="gray" component="div">
                  Service fee
                </Typography>
                <Typography variant="h7" color="blue" component="div">
                  2.5%
                </Typography>
              </Box>
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "10px",
                    marginBottom: "50px"
                  }}
                >
                  <Typography variant="h7" color="gray" component="div">
                    {" "}
                    You will receive 0.053 ETH{" "}
                  </Typography>
                  <Typography variant="h7" sx={{ color: "blue" }}>
                    {" "}
                    $106.58
                  </Typography>{" "}
                </Box>
              </Container>
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px"
                  }}
                >
                  <Typography variant="h5" color="blue" component="div">
                    Unlock once purchased
                  </Typography>
                  <Typography variant="h5" color="gray" component="div">
                    Price
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "30px" }}>
                  <Typography variant="h7" color="gray" component="div">
                    Content will be unlocked after succesful transaction
                  </Typography>
                </Box>

                <Box sx={{ marginBottom: "15px" }}>
                  <Typography variant="h7" color="gray" component="div">
                    Digital key, code t redeem or link to a file
                  </Typography>
                </Box>
                <Divider></Divider>
                <Box sx={{ marginBottom: "10px", marginTop: "15px" }}>
                  <Typography variant="h7" color="gray" component="div">
                    Markdomn is supportd
                  </Typography>
                  <Typography variant="h7" color="gray" component="div">
                    Unicode symbols are NOT supported
                  </Typography>
                </Box>
              </Container>

              {/* Choose collection */}
              <Container>
                <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
                  <Typography variant="h5" color="black" component="div">
                    Choose collection
                  </Typography>
                </Box>
              </Container>
              <Box sx={{ display: "flex" }}>
                <Container>
                  <Box
                    sx={{
                      // display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      border: "1px solid",
                      borderRadius: "30px",
                      height: "150px",
                      width: "200px"
                    }}
                  ></Box>
                </Container>
                <Container>
                  <Box
                    sx={{
                      // display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      border: "1px solid",
                      borderRadius: "30px",
                      height: "150px",
                      width: "200px"
                    }}
                  ></Box>
                </Container>
              </Box>

              <Container>
                <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
                  <Typography variant="h5" color="black" component="div">
                    Title
                  </Typography>
                  <Box sx={{ marginBottom: "10px", marginTop: "30px" }}>
                    <Typography variant="h7" color="gray" component="div">
                      e.g."After purchasing you'll be able to get real T-Shirt"
                    </Typography>
                  </Box>
                  <Divider></Divider>
                </Box>
              </Container>

              <Container>
                <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
                  <Typography variant="h5" color="black" component="div">
                    Description
                  </Typography>
                  <Box sx={{ marginBottom: "10px", marginTop: "30px" }}>
                    <Typography variant="h7" color="gray" component="div">
                      e.g."After purchasing you'll be able to get real T-Shirt"
                    </Typography>
                  </Box>
                  <Divider></Divider>
                  <Box sx={{ marginBottom: "30px", marginTop: "10px" }}>
                    <Typography variant="h7" color="gray" component="div">
                      With presserved line-breaks
                    </Typography>
                  </Box>
                </Box>
              </Container>

              <Container>
                <Box>
                  <Typography variant="h5" color="black" component="div">
                    Royalties
                  </Typography>
                  <Box sx={{ marginBottom: "10px", marginTop: "30px" }}>
                    <Typography variant="h7" color="gray" component="div">
                      E.g.10%
                    </Typography>
                  </Box>
                  <Divider></Divider>
                  <Box sx={{ marginBottom: "30px", marginTop: "10px" }}>
                    <Typography variant="h7" color="gray" component="div">
                      suggested:0%,10%,20%,30%
                    </Typography>
                  </Box>
                </Box>
              </Container>

              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center"
                }}
              >
                <Button variant="outlined">HIDE ADVANCED SETTINGS</Button>
              </Box>

              {/* Properties */}
              {/* <Button variant="outlined">HIDE ADVANCED SETTINGS</Button> */}

              <Container>
                <Box sx={{ marginBottom: "50px", marginTop: "40px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="h5" color="black" component="div">
                      Properties
                    </Typography>
                    <Typography variant="h5" color="gray" component="div">
                      (optional)
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        marginBottom: "10px",
                        marginTop: "30px",
                        width: "280px"
                      }}
                    >
                      <Box sx={{ marginBottom: "10px" }}>
                        <Typography variant="h7" color="gray" component="div">
                          e.g.Size
                        </Typography>
                      </Box>
                      <Divider></Divider>
                    </Box>

                    <Box
                      sx={{
                        marginBottom: "10px",
                        marginTop: "30px",
                        width: "280px"
                      }}
                    >
                      <Box sx={{ marginBottom: "10px" }}>
                        <Typography variant="h7" color="gray" component="div">
                          e.g.Size M
                        </Typography>
                      </Box>
                      <Divider></Divider>
                    </Box>
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
                  <Box sx={{ marginBottom: "10px", marginTop: "30px" }}>
                    <Typography variant="h7" color="gray" component="div">
                      Image Description in details (do not start with word
                      "image")
                    </Typography>
                  </Box>
                  <Divider></Divider>
                  <Box sx={{ marginBottom: "30px", marginTop: "10px" }}>
                    <Typography variant="h7" color="gray" component="div">
                      Text that will be used in VoiceOver for People with
                      disabillities
                    </Typography>
                  </Box>
                </Box>
              </Container>

              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "space-between",
                  alignContent: "center"
                }}
              >
                <Button variant="contained">CREATE ITEM</Button>
                <Box sx={{ display: "flex" }}>
                  <Button variant="contained">UnSaved changes</Button>
                  <NotListedLocationOutlinedIcon />
                </Box>
              </Box>
            </Box>

            <Container>
              <Box
                sx={{
                  marginBottom: "40px",
                  padding: "10px",
                  marginTop: "50px"
                }}
              >
                <Typography variant="h5" color="black" component="div">
                  Preview
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    border: "1px solid",
                    borderRadius: "30px",
                    height: "460px",
                    width: "500px"
                  }}
                >
                  {/* <img src={file} alt="" /> */}
                </Box>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Common;
