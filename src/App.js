import { Routes, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';

// import ResponsiveAppBar from './components/ResponsiveAppBar';

// styling ---------------
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// pages ---------------

import Results from './pages/Results';
import Calculator from './pages/Calculator';
import Home from './pages/Home'
import Info from './pages/Info'
import ResultsFlight from './pages/ResultsFlight';
import ErrorPage from './pages/ErrorPage'
import Footer from './components/Footer';


// ---------------------

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      {/* <PlaceToVisit /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/info' element={<Info />} />
        <Route path='/results/car' element={<Results />} />
        <Route path='/results/flight' element={<ResultsFlight />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
      
}

export default App;
