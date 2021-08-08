import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: "-10px",
  },
}));

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Profile" />
        <Tab label="Account" />
        <Tab label="others" />
      </Tabs>
      <Divider></Divider>
    </div>
  );
}
