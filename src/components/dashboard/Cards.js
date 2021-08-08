import { Grid ,Paper} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    margin:{
        marginLeft:'20px',
        marginTop:'20px',
        marginBottom:'20px',
        marginRight:'20px'
    }

}))




export default function Cards() {
const classes=useStyles();
  return (
    <div>
      <Grid container xs="12" spacing={3}>
        <Grid container xs="4" >
            <Paper className={classes.margin}>
<Grid item xs="12">
    <p>PROFITS</p>
    <div className="flex font-bold text-lg"> 
    <p>24,000</p>
    <p>Frw</p>
    </div>

    <div className="flex font-bold text-md"> 
    <p>Month:</p>
    <p>September</p>
    </div>
    
    
</Grid>
            </Paper>
        </Grid>
        <Grid item xs="4"></Grid>
        <Grid item xs="4"></Grid>
      </Grid>
    </div>
  );
}
