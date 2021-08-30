import React from 'react';
import './Seasons.css';
import Winter from '../../assets/images/winter-capsule.jpg';
import Fall from '../../assets/images/fall-capsule.jpg';
import Spring from '../../assets/images/spring-capsule.jpg';
import Summer from '../../assets/images/summer-capsule.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Product from '../../components/Product/Product';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const seasons=[Winter, Fall, Spring, Summer]



const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',  
    alignItems: 'center',
    position: 'relative',
    top: '230px',
  },
  
  paper: {
    paddingTop: '35px',
    display: 'flex',
    height: '550px',
    width: '400px',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#1c1c1c',
    opacity: '98%',
    borderRadius: '10px',
  },

  grid: {
      position: 'relative',
      height: '580px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },

  photoTitle: {
    backgroundColor: '#fff',
    opacity: '85%',
    color: '#1c1c1c',
    position: 'fixed',
    display: 'flex',
    top: '135px',
    justifyContent: 'center',
    padding: '10px',
    borderRadius: '8px',
    fontFamily: 'Raleway',
    fontSize: '35px',
    fontWeight: 'bold'
  },

  price: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '115px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '18px'
  },

  bagButton: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '55px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '9.5px',
    borderRadius: '8px',
    left: '300px'
  },

  photoFooter: {
    backgroundColor: '#fff',
    opacity: '85%',
    color: '#1c1c1c',
    position: 'fixed',
    display: 'flex',
    bottom: '30px',
    justifyContent: 'center',
    width: '300px',
    padding: '8px',
    borderRadius: '8px',
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontWeight: 'bold'
  },

  addBag1: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '55px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '2px',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '128px',
    height: '36px',
    left: '60px'
  },

  addBag2: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '55px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '2px',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '128px',
    height: '36px',
    left: '60px'
  },

  addBag3: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '55px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '2px',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '128px',
    height: '36px',
    left: '60px'
  },

  addBag4: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '55px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '2px',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '128px',
    height: '36px',
    left: '60px'
  },

}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const itemCounter = {
    Spring: 0,
    Winter: 0,
    Fall: 0,
    Summer: 0
  }
  const [itemCount, setItemCount] = React.useState(itemCounter);
  

  return (
      
<div class='body'>     
    
        <section className={classes.gridContainer}>
            
        <Grid container spacing={0}>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>Winter</div>
              <p className={classes.price}>$199</p>
                <button className={classes.bagButton}>Add to Bag</button>
            <div className={classes.addBag1}>
              <Badge color="secondary" badgeContent={itemCount.Winter}>
                <LocalMallIcon />{" "}
              </Badge>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      setItemCount({...itemCount, Winter: Math.max(itemCount.Winter - 1, 0)});
                    }}
                  >
                    {" "}
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    onClick={() => {
                      setItemCount({...itemCount, Winter: itemCount.Winter + 1});
                    }}
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
            </div>

            <Paper className={classes.paper}><Product name={seasons[0]}/></Paper>

            <div className={classes.photoFooter}> Designed for colder climates, this capsule includes the perfect winter wear that will also leave your wallet warm and fuzzy.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>Spring</div>
            <p className={classes.price}>$149</p>
            <button className={classes.bagButton}>Add to Bag</button>
            <div className={classes.addBag2}>
          <div>
            <Badge color="secondary" badgeContent={itemCount.Spring}>
            <LocalMallIcon />{" "}
            </Badge>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, Spring: Math.max(itemCount.Spring - 1, 0)});
                }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, Spring: itemCount.Spring + 1});
                }}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
            <Paper className={classes.paper}><Product name={seasons[1]}/></Paper>
            <div className={classes.photoFooter}> Whether it's going to be a sunny or soaked season, hot or humid, our spring capsule will accompany you every step of the way.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>Summer</div>
            <p className={classes.price}>$179</p>
            <button className={classes.bagButton}>Add to Bag</button>
            <div className={classes.addBag3}>
          <div>
            <Badge color="secondary" badgeContent={itemCount.Summer}>
            <LocalMallIcon />{" "}
            </Badge>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, Summer: Math.max(itemCount.Summer - 1, 0)});
                }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, Summer: itemCount.Summer + 1});
                }}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
            <Paper className={classes.paper}><Product name={seasons[2]}/></Paper>
            <div className={classes.photoFooter}> No need to sweat your style this summer, this collection is sure to beat the heat and fashion police. Limited quantity, order now!</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>Fall</div>
            <p className={classes.price}>$179</p>
            <div className={classes.addBag4}>
          <div>
            <Badge color="secondary" badgeContent={itemCount.Fall}>
              <LocalMallIcon />{" "}
            </Badge>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, Fall: Math.max(itemCount.Fall - 1, 0)});
                }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, Fall: itemCount.Fall + 1});
                }}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
            <button className={classes.bagButton}>Add to Bag</button>
            <Paper className={classes.paper}><Product name={seasons[3]}/></Paper>
            <div className={classes.photoFooter}> We dare you not to fall in love with these fall favorites. Although paired perfectly with Pumpkin Spice Latte's, this capsule is anything but basic.</div>
            </Grid>

        </Grid>      

        </section>
</div>
  );
}

