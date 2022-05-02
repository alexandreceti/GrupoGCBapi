import Head from 'next/head'
import Image from 'next/image'
import DoctorList from '../Components/DoctorList'

export default function Home() {
  return (
    <div className='columns'>
      
      <div className='column'>
        <h1>Lista de Medicos</h1>
        <div>
          <DoctorList />
        </div>
      </div>
    </div>
  )
}
