import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import ProgressBar from './progressBar';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "1rem",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography style={{marginBottom:"0.5rem"}} variant="body2" color="textSecondary" component="p">
            {props.creator}
          </Typography>
          <ProgressBar value={0} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}