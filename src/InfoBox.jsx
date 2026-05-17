import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}) {
    return(
        <div className='InfoBox'>
            <div className='card-container'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={"https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div>Temperature = {info.temp}&deg;C</div>
                    <div>Humidity = {info.humidity}</div>
                    <div>Min. Temperature = {info.tempMin}&deg;C</div>
                    <div>Max. Temperature = {info.tempMax}&deg;C</div>
                    <div>The temperature feels like {info.feelslike}&deg;C</div>
                    <div>The weather can be described as {info.weather}.</div>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}