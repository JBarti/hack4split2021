import React from 'react';
import { makeStyles, Card, CardActions, CardContent, Button, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    marginTop: "1rem",
    height: 70
  },
});

export default function ItemCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent >
        <Box component="span" style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
          <Typography variant="h6" color="textPrimary">
            {props.name}
          </Typography>
          <Typography style={{marginLeft: "2rem"}} variant="subtitle1" color="textSecondary">
            {props.current} / {props.total}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}