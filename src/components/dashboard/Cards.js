import { Grid ,Paper} from "@material-ui/core";

export default function Cards() {
  return (
    <div>
      <Grid container xs="12">
        <Grid container xs="4">
            <Paper>
<Grid item xs="12">
    <p>PROFITS</p>
    <div className="flex font-bold text-lg"> 
    <p>24,000</p>
    <p>Frw</p>
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
