import { useState, useEffect } from "react";
import FormDoctor from "../Components/FormDoctor";

export default function NewDoctor() {
  const [specialties, setSpecialties] = useState([])
  async function findSpecialties() {
    
    const url = `http://localhost:8080/specialties`
    const specialtiesRep  = await fetch(url)
                              .then(res => res.json())
                              .catch(erro => console.log(erro))
    
    setSpecialties(specialtiesRep);
  }
  useEffect(() => {
    findSpecialties()
  },[])
  return (
    <div className='containner pt-3'>
        <h1 className="title">Cadastro de Novo Médico</h1>
        <div>
        {(specialties[0]?.id)? (<FormDoctor doctor={{}} specialties={specialties} />): null}
        </div>
    </div>
  )
}
