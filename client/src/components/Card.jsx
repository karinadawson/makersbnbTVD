import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = ({ title, description, image, price, button1Text, button2Text }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "1em" }}>
      {image && ( // Conditionally render image if provided
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title={title} // Use title prop for image title
        />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          £{price} / night
        </Typography>
      </CardContent>

      <CardActions>
        <button style={{ color: "orange" }} size="small">{button1Text}</button>
        <button size="small">{button2Text}</button>
      </CardActions>

    </Card>
  );
};

export default CardComponent;
