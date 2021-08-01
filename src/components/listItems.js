import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
export const mainListItems = (
  <div>
    <ListItem button className="hover:text-blue-700 ">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>

      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button className="hover:text-blue-700 ">
      <ListItemIcon>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItem>
    <ListItem button className="hover:text-blue-700 ">
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Rent" />
    </ListItem>
    <ListItem button className="hover:text-blue-700 ">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Support and Statistics</ListSubheader>
    <ListItem button className="hover:text-blue-700 ">
      <ListItemIcon>
        <ContactSupportOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItem>
    <ListItem button className="hover:text-blue-700 ">
      <ListItemIcon>
        <QuestionAnswerOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Comment" />
    </ListItem>
    <ListItem button className="hover:text-blue-700 ">
      <ListItemIcon>
        <EqualizerOutlinedIcon />
      </ListItemIcon>
      <ListItemText className="text-sm" primary=" Reports" />
    </ListItem>
  </div>
);
