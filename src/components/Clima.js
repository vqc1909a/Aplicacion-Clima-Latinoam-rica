import React, {useState} from 'react';
import Formulario from './Formulario';
import Resultados from './Resultados';
import Spinner from './Spinner';
const Clima = () => {
     const [clima, changeClima] = useState({});
     const [spinner, changeSpinner] = useState(false);

     const agregarClima = (clima) => {
          changeClima({...clima});
     }

     return (
           <section className="clima py-5">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-6 justify-content-center align-items-center">
                              <Formulario title="Seleccionar ciudad y país" agregarClima={agregarClima} changeSpinner={changeSpinner}></Formulario>
                         </div>
                         <div className="col-sm-6 justify-content-center align-items-center">
                              {!spinner
                                   ?
                                   <Resultados clima={clima}></Resultados>
                                   :
                                   <Spinner></Spinner>
                              }
                         </div>
                    </div>
               </div>
          </section>
     );
}
 
export default Clima;