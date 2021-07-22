import React from 'react'
import { Link, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Home from './Home';
import List from './List';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    textDecoration: 'none'
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <ul> */}
        <Button size="small" variant="outlined" color="primary">
          <Link to='/'>Home</Link>
        </Button>
        <Button size="small" variant="outlined" color="primary">
          <Link to='/list'>List</Link>
        </Button>
      {/* </ul> */}
    

      <Route path='/' component={Home} exact='true' />
      <Route path='/list' component={List}/>
    </div>
  );
}

export default App;
