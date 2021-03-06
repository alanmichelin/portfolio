import {  Grid } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import Logos from "./logos";

const Profile = ({data}) =>{

return(
    <Grid container spacing={2}  >
        <Grid  item xs={12} sm={12} style={{fontSize:'24px', color:'white'}}>
        <h2 style={{fontFamily:'Bebas Neue',textAlign:'center',letterSpacing:'3px',fontSize:'4rem',marginBottom:'-2rem'}}>{data.profile}</h2>
        </Grid>
        <Grid  item lg={2} md={12} ></Grid>

        <Grid item lg={4} md={4} sm={12} style={{color:'white'}}>
        <div style={{ fontSize:'35px', textAlign:'center'}}>
        <h3 style={{fontFamily:'Bebas Neue',letterSpacing:'3px'}}>{data.about}</h3>
        </div>
        <div style={{fontSize:'20px',  fontFamily:['Roboto', 'sans-serif']}}>
        <p><PersonIcon style={{position:'relative',top:'4px'}}/> Alan Michelin </p>
        <p><LocationOnIcon  style={{position:'relative',top:'4px'}}/> Argentina, Buenos Aires</p>
        <p><TodayIcon  style={{position:'relative',top:'4px'}}/> {data.age} </p>
        <p><SchoolIcon  style={{position:'relative',top:'4px'}}/> {data.uni}</p>
        <p><InfoIcon  style={{position:'relative',top:'4px'}}/> {data.desc}</p>
        </div>
    </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={3} md={6} sm={12} style={{ fontSize:'35px', color:'white',textAlign:'center'}}>
        <h3 style={{fontFamily:'Bebas Neue',letterSpacing:'3px'}}>{data.tech}</h3>
        <Grid item style={{display:'flex',justifyContent: 'space-evenly',flexWrap:'wrap'}}>
        <Logos/>
        </Grid>
      

        </Grid>
   
    </Grid>
)
}

export default Profile