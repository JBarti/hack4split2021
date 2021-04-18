import ItemCard from './itemCard';
import { Typography } from '@material-ui/core'

function ItemPreview(props){
  return(
    <ItemCard 
      name={props.name} 
      alt={props.alt}
      src={props.src}
    >
      <Typography style={{marginLeft: "2rem"}} variant="subtitle1" color="textSecondary">
        {props.current} / {props.total}
      </Typography>
    </ItemCard>
  );
}

export default ItemPreview;