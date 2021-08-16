import React from 'react';
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
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { useHistory } from 'react-router-dom';
// import { useLocation,Link } from 'react-router-dom';
import { MyContext } from '../MyContext';
import { useContext } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

  
export default function Show(){

  const {day,setDay}=useContext(MyContext);
  const {settings,setSettings}=useContext(MyContext);
  const{rent,setRenting}=useContext(MyContext);
  const {dash,setDash}=useContext(MyContext);
  const{newRenter,setNewRenter}=useContext(MyContext);
  const {payRent,setPayRent}=useContext(MyContext);
  const {dayServicePayment,setDayServicepayment}=useContext(MyContext);

  
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
   
  
    const handleClick = () => {
      setOpen(!open);
    };
    const history =useHistory();
    const changer=()=>{
      if(settings===true){
        console.log("settings true");
      }
    }
  
    return(
        <div>
            <div>
<List>
    <ListItem button className="hover:text-blue-700 " 
    onClick={()=>{setDash(true);
      setRenting(false);setSettings(false);setDay(false)
    setNewRenter(false);
    setPayRent(false);
    setDayServicepayment(false);
    }}
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
          <ListItem button className={classes.nested} onClick={()=>
            {setDay(true);
              setSettings(false);
              setRenting(false);
        setNewRenter(false);
        setPayRent(false);
        setDayServicepayment(false);
            }}>
            <ListItemIcon>
              <WbSunnyIcon />
            </ListItemIcon>
            <ListItemText primary="Day" />
          </ListItem>
          <ListItem button className={classes.nested} >
            <ListItemIcon>
              <NightsStayIcon />
            </ListItemIcon>
            <ListItemText primary="Night" />
          </ListItem>
        </List>
      </Collapse>
    <ListItem button className="hover:text-blue-700 " onClick={()=>{setRenting(true);
    setSettings(false);
    setDay(false);
    setNewRenter(false);
    setPayRent(false);
    setDayServicepayment(false);
    }}>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Rent" />
    </ListItem>
    <ListItem button className="hover:text-blue-700 " onClick={()=>{setSettings(true);
    setDay(false);
    setRenting(false);
    setNewRenter(false);
    setPayRent(false);
    setDayServicepayment(false);
    }}>
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
     <ListItem button className="hover:text-blue-700  " onClick={()=>history.push('/dashboard/support')}>
      <ListItemIcon>
        <ContactSupportOutlinedIcon />
       </ListItemIcon>
       <ListItemText primary="Support" />
     </ListItem>
     <ListItem button className="hover:text-blue-700 " onClick={()=>history.push('/dashboard/comment')}>
       <ListItemIcon>
         <QuestionAnswerOutlinedIcon />
       </ListItemIcon>
       <ListItemText primary="Comment" />
     </ListItem>
     <ListItem button className="hover:text-blue-700 " onClick={()=>history.push('/dashboard/reports')}>
       <ListItemIcon>
         <EqualizerOutlinedIcon />
       </ListItemIcon>
       <ListItemText className="text-sm" primary=" Reports" />
     </ListItem>
  </div>
        </div>
    )
}