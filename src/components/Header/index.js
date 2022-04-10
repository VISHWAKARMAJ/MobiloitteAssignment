import React from "react";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Box
            sx={{
              borderStyle: "dotted",
              borderRadius: "30px",
              height: "200px",
              width: "400px"
            }}
          >
            Header
          </Box>
          <Box
            sx={{
              borderStyle: "dotted",
              borderRadius: "30px",
              height: "200px",
              width: "400px"
            }}
          >
            Header
          </Box>
        </Box>
        <Box sx={{ border: "1px solid", height: "500px", width: "400px" }}>
          Header
        </Box>
      </Box>
    </div>
  );
};

export default Header;
