import MoreVertIcon from '@material-ui/icons/MoreVert';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Divider, IconButton } from '@material-ui/core';

export function Reports(){

    const reports=["profits","expenses flow","night funds","day funds"]
    return(
<>
<p className=" text-gray-600">Prefered reports</p>

<div>
    {reports.map((report,index)=>(
<div>
<div className="flex mt-6" key={index}>
<div>
    <AssessmentIcon fontSize="large" color="primary"></AssessmentIcon>
</div>
<div className="ml-2">
    <p className="font-semibold">{report}</p>
    <p className="text-sm">It is downloadable</p>
</div>
<div>
    <IconButton>
    <MoreVertIcon ></MoreVertIcon>
    </IconButton>

</div>
</div>
<Divider/>
</div>

    ))}


</div>
</>
    )


}