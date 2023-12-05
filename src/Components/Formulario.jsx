import {useState, useEffect} from 'react'
import ErrorImput from './ErrorImput';
import Succesfull from './Succesfull';


function Formulario({Autos, setAutos,  AutoCustomer, setAutoCustomer}) {

  //console.log(Autos)
  const  [CarBrand, setCarBrand] =  useState('');
  const  [CarModel, setCarModel] =  useState('');
  const  [CarYear, setCarYear] =  useState('');
  const  [EmailOwner, setEmailOwner] =  useState('');
  const  [Description, setDescription] =  useState('');

  const [error, seterror] =  useState(false);

   useEffect(() => {

     if(Object.keys(AutoCustomer).length > 0){
        
      setCarBrand(AutoCustomer.CarBrand);
      setCarModel(AutoCustomer.CarModel);
      setCarYear(AutoCustomer.CarYear);
      setEmailOwner(AutoCustomer.EmailOwner);
      setDescription(AutoCustomer.Description);
     }
   }, [AutoCustomer])

  function getID(){
    
     const uniqueID =  Math.random().toString(36).substring(2);
     return uniqueID

  }

  const handleSubmit = (e) => {
 
    e.preventDefault();

    //Validacion de formulario
    if([CarBrand,CarModel,CarYear,EmailOwner,Description].includes('')){

        //console.log("hay un campo vacio")
        seterror(true);
        return;
    }

          seterror(false);

           //ObjetoDePaciente
        const AutosCollection = {
          CarBrand : CarBrand,
          CarModel : CarModel,
          CarYear : CarYear,
          EmailOwner: EmailOwner,
          Description : Description,
         
        }


        if(AutoCustomer.ID){

          //Editando el registro 
         
         AutosCollection.ID =  AutoCustomer.ID;  


          const AutoUpdate  =  Autos.map(Update => {

              return(

                  Update.ID === AutoCustomer.ID ? AutosCollection : Update
              )
          })

          //const AutoUpdate  =  Autos.map(Update => Update.ID === AutoCustomer.ID ? AutosCollection : Update)
         setAutos(AutoUpdate);
         setAutoCustomer({});

        }else{
          //Nuevo registro 
          AutosCollection.ID = getID();
          setAutos([...Autos, AutosCollection]);

        }

        //console.log(AutosCollection);
        

        //Reiniicar el Form 
        setCarBrand("");
        setCarModel("");
        setCarYear("");
        setEmailOwner("");
        setDescription(""); 
  }

    
 

  return (
    <>
    <div className=" text-center md:w-1/2  xl:w-2/5">
    <h2 className="text-white 
     font-bold text-3xl font-serif">
      Seguimiento Automovil
    </h2>

       <p 
       className=" text-white font-bold font-serif mt-5 text-lg">
          Registro y Administracion de <span className=" text-indigo-600 font-bold">Autos</span>
        </p>
        <form 
        onSubmit={handleSubmit}
        action="" className=" border border-indigo-100 shadow-md shadow-indigo-400 mt-5 rounded-lg py-10 px-8 w-full mb-5">

          {error ? <ErrorImput>All fields mst be fill</ErrorImput> : 
          <Succesfull>Thanks for the information</Succesfull>}
          <div>
            {/* carBrandInput */}
            <label htmlFor="CarBrand" className="block text-indigo-700 font-bold text-lg text-start mb-3">
              Car Brand</label>
            <input type="text" 
            id="CarBrand"
             className="mb-4  w-full rounded-lg p-2 bg-black border-2
            text-white hover:border-green-500  placeholder-slate-500"
            placeholder="Honda....."
            value={CarBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            />
               {/* carModel */}
             <label 
             htmlFor = "Car_Model"
             className="block text-indigo-700 font-bold text-lg text-start mb-3 \">
              Car Model</label>
            <input 
            type="text" id="Car_Model" 
            className="mb-4  w-full rounded-lg p-2 bg-black border-2 text-white
            hover:border-green-500  placeholder-slate-500"
            placeholder="Crv...."
            value={CarModel}
            onChange={(e) => setCarModel(e.target.value)}
            />
             {/* carYear */}
             <label htmlFor="Car_Year" 
             className="block text-indigo-700 font-bold text-lg text-start mb-3">
              Car year</label>
            <input 
            type="date" id="Car_Year" 
            className="mb-4  w-full rounded-lg p-2 border-2 bg-black text-slate-500
            hover:border-green-500"
            value={CarYear}
            onChange={(e) => setCarYear(e.target.value)}
      
            />
             {/* EmailOwner */}
            <label htmlFor="Email_owner" className="block text-indigo-700 font-bold text-lg text-start mb-3">
              Email Owner</label>
            <input 
            type="Email" id="Email_owner"
             className="mb-4  w-full rounded-lg p-2 bg-black border-2 hover:border-green-500 text-white placeholder-slate-500"
             placeholder="YourEmail@example.com"
             value={EmailOwner}
            onChange={(e) => setEmailOwner(e.target.value)}
            />
            {/* Description */}
            <label htmlFor="Description" className="block text-indigo-700 font-bold text-lg text-start mb-3">
              Description
            </label>
            <textarea 
            name="Description" 
            id="Description" 
            className=" w-full rounded-lg p-2 bg-black text-white border-2 hover:border-green-500"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}>
              Please Describe us your problem
            </textarea>
            {/* Buttom */}
            <input 
            type="submit" 
            value={AutoCustomer.ID ? "Edit Register" : "Submit"} 
            className=" text-white border-2 border-indigo-600 p-4 rounded-lg w-full cursor-pointer mt-4 hover:bg-indigo-600 transition duration-700 ease-in-out  text-lg font-bold" />
          </div>
        </form>
    </div> 
    </>
  )
}

export default Formulario