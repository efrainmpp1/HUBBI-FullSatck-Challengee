/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({
  tittle,
  onClick = () => {},
  ...props
}) {
  return (
    <div onClick={onClick}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {tittle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
