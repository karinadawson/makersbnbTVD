import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="client/src/assets/2-bed.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            2-bed Apartment
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cosy & quiet 2-bed apartment in Central London
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Book</Button>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
    );
  }