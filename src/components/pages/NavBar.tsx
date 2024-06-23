import { AppBar, Toolbar, Box, styled, Typography, InputBase } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px", // corrected padding
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            Ortho Solution
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Search>
            <InputBase placeholder="Search..." />
          </Search>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;

