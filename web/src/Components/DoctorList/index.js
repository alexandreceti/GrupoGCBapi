

import React from 'react';
import { useEffect, useState } from 'react';
import ItemDoctor from './ItemDoctor';

function DoctorList(props) {

  const [doctors, setDoctors] = useState([]);

  async function handleDoctors() {
    const doctorsRep  = await fetch('http://localhost:8080/doctors').then(res => res.json()).catch(erro => console.log(erro))
    console.log(doctorsRep);
    setDoctors(doctorsRep);
  }

  useEffect(() => {
    handleDoctors()
  }, [])

  return (
    <div className='table-container'>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CRM</th>
            <th>Telefone</th>
            <th>Celular</th>
            <th>CEP</th>
            <th>Endereco</th>
            <th>Especialidades</th>
            <th>Opções</th>
          </tr>
        </thead>
      <tbody>
        { doctors?.map(doctor => (
          <ItemDoctor doctor={doctor} key={doctor.id} />
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default DoctorList;