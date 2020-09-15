import React, {Fragment}from 'react';
import PropTypes from 'prop-types';
const Resultados = ({clima}) => {
      const {cod, name, main, weather} = clima;

      //!Grados kelvin
      const kelvin = 273.15
     let component;
     if(cod === 200){
          component = <div className="card bg-white">
                         <div className="card-body text-body text-center">
                              <h3 className="font-weight-bolder">El clima de {name} es: </h3>
                              <p className="display-4">{(main.temp - kelvin).toFixed(2)} &#x2103;</p>
                              <h4 className="ml-2 font-weight-bolder text-left">Detalles:</h4>
                              <div className="list-group list-group-flush text-left">
                                   <li className="list-group-item lead"><span className="font-weight-bolder">• Situación:</span> {weather[0].description}</li>
                                   <li className="list-group-item lead"><span className="font-weight-bolder">• Temperatura Máxima</span>  {(main.temp_max - kelvin).toFixed(2)} &#x2103;</li>
                                   <li className="list-group-item lead"><span className="font-weight-bolder">• Temperatura Mínima</span> {(main.temp_min - kelvin).toFixed(2)} &#x2103;</li>
                              </div>
                         </div>
                    </div>
     }else if(cod === '404'){
          component = <div className="card bg-danger">
                         <div className="card-body text-white text-center">
                              <h3 className="font-weight-bolder">No se encontraron resultados</h3>
                         </div>
                    </div>
     }
     return (
          <Fragment>
               {component}
          </Fragment>
     );
}

Resultados.propTypes = {
     clima: PropTypes.object.isRequired
}
export default Resultados;