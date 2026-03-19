import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CodeIcon from "@mui/icons-material/Code";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // State to keep track of which tab is active
  const [activeTab, setActiveTab] = useState(location.pathname);

  // Keep the bottom nav in sync if the URL changes some other way
  useEffect(() => {
    let path = location.pathname;
    // Map the root path to the learn tab
    if (path === "/") path = "/learn";
    setActiveTab(path);
  }, [location.pathname]);

  return (
    <Container maxWidth="md">
      <Outlet />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          sx={{ position: "fixed", bottom: 0, width: "100%" }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={activeTab}
            onChange={(_event, newValue) => {
              navigate(newValue);
            }}
          >
            <BottomNavigationAction
              label="Learn"
              value="/learn"
              icon={<MenuBookIcon />}
            />
            <BottomNavigationAction
              label="Practice"
              value="/practice"
              icon={<CodeIcon />}
            />
            <BottomNavigationAction
              label="Projects"
              value="/projects"
              icon={<AccountTreeIcon />}
            />
            <BottomNavigationAction
              label="Leaderboard"
              value="/leaderboard"
              icon={<EmojiEventsIcon />}
            />
            <BottomNavigationAction
              label="Profile"
              value="/profile"
              icon={<PersonIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
