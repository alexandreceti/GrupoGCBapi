import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import FormDoctor from '../../Components/FormDoctor'


export default function RemoveDoctor() {
  
  const router = useRouter()
  const id = router.query.id
  const [doctor, setDoctor] = useState({})

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
    // const specialties = doctorRep.Specialties?.map(item => item.id)
    // console.log(specialties);
    // console.log(doctorRep);
    // const updoctor = {...doctorRep, Specialties: specialties}
    // console.log(updoctor)
    // setSpecialties(specialtiesRep);
    setDoctor(doctorRep);
  }

  useEffect(() => {
    
    findDoctor(id)
  }, [id])

  async function removeDoctor(){
    
    const url = `http://localhost:8080/doctors/${doctor.id}`
    const config = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(doctor)
    }

    const doctorRep  = await fetch(url, config)
                              .then(res => {
                                console.log(res.status)
                                return res.status
                              })
                              .catch(erro => console.log(erro))
    console.log(doctorRep)
    router.push('/')
  }

  return (
    <div className='containner pt-3'>
        <h1 className="title">Atualizar de Novo Médico</h1>
        <div>
          {(doctor.id)? (''): null}
          <div>
          <h2 className='title is-4'>
            Remover o medico {doctor?.name}
          </h2>
            <button className='button is-danger' onClick={removeDoctor}>Remover</button>
          </div>
        </div>
    </div>
  )
}
