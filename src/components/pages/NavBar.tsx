import { AppBar, Toolbar, Box, styled, Typography, InputBase } from "@mui/material";
import{ useState } from 'react';


function NavBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
      const value = e.target.value;
      setSearchQuery(value);
      onSearch(value); // Pass the search query to the parent component
  };

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
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            Patient
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Search>
          <InputBase
                        placeholder="Search by tracking number..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        inputProps={{ 'aria-label': 'search' }}
                    />
          </Search>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
      </StyledToolbar>
    </AppBar>
  );
}
;

export default NavBar;

