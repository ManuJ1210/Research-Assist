import Header from './components/Header & Footer/Header'
import './App.css'
import Footer from './components/Header & Footer/Footer'
import RouteLoader from './Routes/RouteLoader'
import AppRoutes from './Routes/router';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>

     
     
     <Header/>
     <AppRoutes/> 
      <ScrollToTop/>
      {/* <RouteLoader/> */}
     <Footer/>
   
  
     
    </>
  )
};
export default App;

