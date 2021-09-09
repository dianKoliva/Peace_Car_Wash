import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { MyContext } from "../../MyContext.js";
import axios from "axios";

const styles = (theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingLeft: 20,
    paddingTop: 10,
  },
});

function Notifications(props) {
  const { classes } = props;
  const { token, setToken } = useContext(MyContext);
  const { notifications, setNotifications } = useContext(MyContext);
  // const [data, setData] = useState(null);

  const formatDate = (date) => new Date(date).toDateString();

  const removeNotification = (id, index, type) => {
    let api = type === "day" ? "dactivity" : "nactivity";

    axios
      .put(
        `/${api}/update/${id}`,
        { seen: true },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        let temp = [...notifications];
        // temp.slice(index, 1);
        temp = temp.filter((x, i) => i !== index);
        setNotifications(temp);
      })
      .catch((err) => console.log(err));
  };

  // console.log(data);

  return (
    <div className="ml-10">
      <div className="mb-5 font-bold">Notifications</div>
      <List className={classes.root}>
        {notifications &&
          notifications.map((item, index) => (
            <ListItem
              key={item._id}
              button
              onClick={() => removeNotification(item._id, index, item.car_type)}
            >
              <ListItemText
                selected
                primary={
                  item.registered_by.first_name +
                  " " +
                  item.registered_by.last_name +
                  " registered new activity"
                }
                secondary={formatDate(item.entry_date)}
              />
            </ListItem>
          ))}
      </List>
    </div>
  );
}

Notifications.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notifications);
