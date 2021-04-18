import React from 'react';
import { makeStyles, Card, CardContent, Typography, Box } from '@material-ui/core';
import ImageAvatar from './avatar';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    width: "auto",
    marginTop: "1rem",
    minHeight: 70,
    height: "auto",
    paddingRight: 0,
    paddingLeft: 0,
  },
});

export default function ItemCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent >
        <Box component="span" style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
          <ImageAvatar alt={props.alt} src={props.src}/>
          <Typography variant="h6" color="textPrimary">
            {props.name}
          </Typography>
          {props.children}
        </Box>
      </CardContent>
    </Card>
  );
}
