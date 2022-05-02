import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import FormDoctor from '../../Components/FormDoctor'


export default function UpdateDoctor() {
  
  const router = useRouter()
  const id = router.query.id
  const [doctor, setDoctor] = useState({})
  const [specialties, setSpecialties] = useState([])

  async function findDoctor(id) {
    
    const url = `http://localhost:8080/doctors/${id}`
    const doctorRep  = await fetch(url)
                              .then(res => res.json())
                              .then((doctor) => {
                                console.log(doctor)
                                doctor.Specialties = doctor.Specialties?.map(item => item.id)
                                return doctor
                              })
                              .catch(erro => console.log(erro))
    const specialtiesRep  = await fetch('http://localhost:8080/specialties')
                              .then(res => res.json())
                              .catch(erro => console.log(erro))
    // const specialties = doctorRep.Specialties?.map(item => item.id)
    // console.log(specialties);
    // console.log(doctorRep);
    // const updoctor = {...doctorRep, Specialties: specialties}
    // console.log(updoctor)
    setSpecialties(specialtiesRep);
    setDoctor(doctorRep);
  }

  useEffect(() => {
    
    findDoctor(id)
  }, [id])

  return (
    <div className='containner pt-3'>
        <h1 className="title">Atualizar de Novo Médico</h1>
        <div>
          {(doctor.id)? (<FormDoctor doctor={doctor} specialties={specialties} />): null}
        </div>
    </div>
  )
}
