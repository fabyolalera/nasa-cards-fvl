//App.js
import React from 'react';
import PlanetCollection from './componentes/PlanetCollection';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Carrusel from './componentes/carrusel';
import PopularPhotosPage from './componentes/PopularPhotosPage';



function App() {
  return (
    
      <div className="App">

          <Header />
          <Carrusel/>
          <header className="App-header">
            
            
          </header>
          
          <PlanetCollection />
          <PopularPhotosPage/>
          
          <Footer/>

      </div>
    
  );
}

export default App;
/** <Link to="/">Volver a la página principal</Link>
 * <Route path="/photo/:id" component={PhotoDetailPage} />
 * <Route exact path="/photos" component={PopularPhotosPage} />*/