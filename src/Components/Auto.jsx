

const Auto = ({AutoCustomer, setAutoCustomer, DeleteCar}) => {
  //console.log(AutoCustomer);
  const {CarBrand, CarModel, CarYear,EmailOwner, Description, ID} = AutoCustomer

   const handleEliminar = () => {
       const respuesta  =  confirm("Do you want to delete This register");

       if(respuesta){
          DeleteCar(ID);
       }
   }

  return (
    <div className="border-2 rounded-xl m-3 px-5 py-5 text-white text-start border-red-500 bg-black opacity-25 hover:opacity-80">
    <p className=" font-bold text-white mb-3 uppercase">Car Brand: {''}
      <span className=" font-normal normal-case">{CarBrand}</span>
      </p>
      <p className=" font-bold text-white mb-3 uppercase">Car Model : {''}
      <span className=" font-normal normal-case">{CarModel}</span>
      </p>
      <p className=" font-bold text-white mb-3 uppercase">Car Year : {''}
      <span className=" font-normal normal-case">{CarYear}</span>
      </p>
      <p className=" font-bold text-white mb-3 uppercase">Email owner : {''}
      <span className=" font-normal normal-case">{EmailOwner}</span>
      </p>
      <p className=" font-bold text-white mb-3 uppercase">Description : {''}
      <span className=" font-normal normal-case">{Description}</span>
      </p>

        <div className="grid gap-4 grid-cols-2 mt-5">
          <button id="Edit" className="bg-orange-600 p-2 font-serif text-lg font-bold rounded-xl"
          onClick={() => setAutoCustomer(AutoCustomer)}
          >Edit
          </button>
          <button id="Delete" className=" rounded-xl bg-red-600 p-2 font-serif text-lg font-bold"
          onClick={handleEliminar}
          >Delete</button>
        </div>
    </div> 

  )
}

export default Auto