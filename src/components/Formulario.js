import React, {useState}from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import {paises} from '../helpers';
const Formulario = ({title, agregarClima, changeSpinner}) => {
     const [data, changeData] = useState({
          ciudad: '',
          pais: '',
          error: ''
     })
     const {ciudad, pais, error} = data;

     const handleData = (e) => {
          changeData({
               ...data,
               [e.target.name]: e.target.value
          })
     }
     const handleSubmit = async (e) => {
               e.preventDefault();
               changeSpinner(true);
               if(ciudad.trim() === '' || pais.trim() === ''){
                    changeData({
                         ...data,
                         error: 'Todos los campos son obligatorios'
                    })
                    changeSpinner(false);
                    return null;
               }
               changeData({
                    ...data,
                    error: ''
               })
          try {
               const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.trim()},${pais}&appid=${process.env.REACT_APP_API_KEY}&lang=es`)
               agregarClima(data);
               changeSpinner(false);
               changeData({
                    ciudad: "",
                    pais: "",
                    error: "",
               });
          }catch(err){
               const {data} = err.response
               agregarClima(data);
               changeSpinner(false);
               changeData({
                    ciudad: "",
                    pais: "",
                    error: "",
               });
          }

     }

     
     return (
          <div className="card bg-secondary text-primary font-weight-bolder">
               <div className="card-header">
                    <h2 className="card-title text-capitalize text-center">{title}</h2>
               </div>
               <div className="card-body">
                    <form onSubmit={handleSubmit}>
                         <div className="form-group">
                              <label htmlFor="ciudad">Ciudad</label>
                              <input value={ciudad} type="text" name="ciudad" id="ciudad" placeholder="Escribe un ciudad" onChange={handleData} className="form-control form-control-lg"/>
                         </div>
                         <div className="form-group">
                              <label htmlFor="pais">Pais</label>
                              <select value={pais} name="pais" id="pais" onChange={handleData} className="form-control form-control-lg">
                                   <option value="" disabled>...Seleccionar País</option>
                                   {paises.map((pais, i) => <option key={i} value={pais.value}>{pais.pais}</option>)}
                              </select>
                         </div>
                         <button type="submit" className="btn btn-primary btn-lg btn-block my-3">Buscar Clima</button>
                         {error ? <div className="alert alert-danger">{error}</div>: null}

                    </form>
               </div>
          </div>     
     );
}
Formulario.propTypes = {
     title: PropTypes.string.isRequired,
     agregarClima: PropTypes.func.isRequired,
     changeSpinner: PropTypes.func.isRequired
}
export default Formulario;