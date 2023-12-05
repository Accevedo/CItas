import {useState, useEffect} from 'react'
import Header from "./Components/Header"
import Formulario from "./Components/Formulario"
import ListadoAutos from "./Components/ListadoAutos"


function App() {
  const [Autos, setAutos] = useState([]);
  const [AutoCustomer, setAutoCustomer] = useState({});
  const DeleteCar  =  (ID) => {
       const AutosUpdate =  Autos.filter(EliminarAuto => EliminarAuto.ID !== ID)
       setAutos(AutosUpdate);
  }

  useEffect(() => {
      const obtenerLocalStorage = () => {
        const AutosLocalStorage = JSON.parse(localStorage.getItem("Autos")) ?? [];
        console.log(AutosLocalStorage);
        console.log( "Hola esto es un",  typeof AutosLocalStorage);
        setAutos(AutosLocalStorage);
    }
      obtenerLocalStorage();
  },[]);  

 
  useEffect(() => {

     localStorage.setItem("Autos", JSON.stringify(Autos));
  }, [Autos])

 
  return (
     //esto se le conoce como fragment <>
     <> 
      <div className=" mt-20 ">
        <Header/>
        <div className=" mt-10 md:flex">
        <Formulario
        AutoCustomer = {AutoCustomer}
         Autos= {Autos}
         setAutos = {setAutos}
         setAutoCustomer = {setAutoCustomer}
        />
        <ListadoAutos
         AutoCustomer = {AutoCustomer}
         Autos = {Autos}
         setAutoCustomer = {setAutoCustomer}
         DeleteCar = {DeleteCar}
        />
        </div>
       </div>
    </>
  )
}

export default App
