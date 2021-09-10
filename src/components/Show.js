/* eslint-disable no-unused-vars */
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import MoneyOutlinedIcon from "@material-ui/icons/MoneyOutlined";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { useHistory } from "react-router-dom";
// import { useLocation,Link } from 'react-router-dom';
import { MyContext } from "../MyContext";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  background: {
    backgroundColor: "#f2f3f7",
    color: "#3F51B5",
  },
}));

export default function Show() {
  const { settings, setSettings } = useContext(MyContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const history = useHistory();
  const changer = () => {
    if (settings === true) {
      console.log("settings true");
    }
  };

  return (
    <div>
      <div>
        <List>
          <ListItem
            button
            className={
              history.location.pathname === "/app" ? classes.background : null
            }
            onClick={() => history.push("/app")}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push("/app/dayservices")}
              >
                <ListItemIcon>
                  <WbSunnyIcon />
                </ListItemIcon>
                <ListItemText primary="Day" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                onClick={() => {
                  history.push("/app/nightservices");
                }}
              >
                <ListItemIcon>
                  <NightsStayIcon />
                </ListItemIcon>
                <ListItemText primary="Night" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            className={
              history.location.pathname === "/app/rent"
                ? classes.background
                : null
            }
            onClick={() => history.push("/app/rent")}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Rent" />
          </ListItem>

          <ListItem
            button
            className={
              history.location.pathname === "/app/expense"
                ? classes.background
                : null
            }
            onClick={() => history.push("/app/expense")}
          >
            <ListItemIcon>
              <MoneyOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Expenses" />
          </ListItem>

          <ListItem
            button
            className={
              history.location.pathname === "/app/settings"
                ? classes.background
                : null
            }
            onClick={() => history.push("/app/settings")}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <Divider />
        </List>
      </div>
      <div>
        <ListSubheader inset>Support and Statistics</ListSubheader>
        <ListItem
          button
          className="hover:text-blue-700  "
          onClick={() => history.push("/dashboard/support")}
        >
          <ListItemIcon>
            <ContactSupportOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
        <ListItem
          button
          className="hover:text-blue-700 "
          onClick={() => history.push("/dashboard/comment")}
        >
          <ListItemIcon>
            <QuestionAnswerOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Comment" />
        </ListItem>
        <ListItem
          button
          className="hover:text-blue-700 "
          onClick={() => history.push("/dashboard/reports")}
        >
          <ListItemIcon>
            <EqualizerOutlinedIcon />
          </ListItemIcon>
          <ListItemText className="text-sm" primary=" Reports" />
        </ListItem>
      </div>
    </div>
  );
}
