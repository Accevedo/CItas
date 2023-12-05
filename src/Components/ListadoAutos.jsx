import Auto from "./Auto"
import  {useEffect}    from 'react'

const ListadoAutos = ({Autos, setAutoCustomer, DeleteCar}) => {
  //console.log(Autos)
  // useEffect(() => {

  //   if(Autos.length > 0){
  //     console.log("klk")
  //   }
  // }, [Auto])

  return (
   <>
   {Autos && Autos.length ?   
   
   <div className="text-center md:w-1/2 xl:w-3/5 md:h-screen overflow-y-scroll">
   <h2 className="text-indigo-600 
    font-bold text-3xl font-serif mb-10"
   >
    Listado De Autos</h2>

    <p className=" text-white font-bold font-serif text-lg ">
      Datos del {''}<span className="text-indigo-600">Vehiculo</span>
    </p>
    {/* Listado de vehiculos */}
    {Autos.map((AutoCustomer)=>{
      //console.log(auto)
        return(
          <Auto
           key={AutoCustomer.ID}
           AutoCustomer = {AutoCustomer} 
           setAutoCustomer = {setAutoCustomer} 
           DeleteCar = {DeleteCar}
          />
        )
    })}
    
   </div>
    :  //the another Condition
    <div className="text-center md:w-1/2 xl:w-3/5 md:h-screen">
   <h2 className="text-red-600 
    font-bold text-3xl font-serif mb-10"
   >
    there aren't cars register yet</h2>
   </div>
    } 
   </>
  )
}

export default ListadoAutos