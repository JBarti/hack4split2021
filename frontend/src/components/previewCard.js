import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "1rem",
  },
  media: {
    minHeight: 140,
    height: "auto",
  },
});

export default function PreviewCard(props) {
  const classes = useStyles();

  return (
    <Fragment>
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
            {props.children}
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Kraj kampanje:</b> {props.endDate}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Opis:</b> {props.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Adresa dostave:</b> {props.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fragment>
  );
}