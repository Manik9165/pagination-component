import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid2, Typography, styled } from "@mui/material";
import FrontendPagination from "./Components/Pagination/FrontendPagination";
import BackendPagination from "./Components/Pagination/BackendPagination";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledTabs = styled(Tabs)({
  width: "100%",
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const StyledTab = styled(Tab)({
  textTransform: "none",
  fontWeight: 600,
  fontSize: "16px",
  "&.Mui-selected": {
    color: "#1890ff",
  },
});

const TabPanel = styled(Box)({
  width: "100%",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CustomTabPanel: React.FC<TabPanelProps> = ({
  index,
  value,
  children,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <TabPanel>
          <Typography variant="h4">{children}</Typography>
        </TabPanel>
      )}
    </div>
  );
};

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="pagination tabs"
        variant="fullWidth"
      >
        <StyledTab label="Frontend" />
        <StyledTab label="Backend" />
      </StyledTabs>
      <Box sx={{ display: "flex", width: "100%" }}>
        <CustomTabPanel value={value} index={0}>
          <FrontendPagination />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <BackendPagination />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default App;
