import React from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState, useEffect } from 'react';
import { route } from 'next/dist/server/router';

export const DoctorSchema = yup.object({
  name: yup.string().required('Campo obrigatório').min(4).max(20),
  CRM: yup.string().required('Campo obrigatório').min(4, 'Minino de 4').max(7, 'Maximo de 7'),
  phone: yup.number('Campo somente numeros'),
  cell: yup.number('Campo somente numeros'),
  CEP: yup.string().required('Campo obrigatório').min(9).max(9),
  Specialties: yup.array().min(2, 'O campo de especialidades deve ter pelo menos 2 itens'),
}).required();

function FormDoctor(props) {
  const { doctor, specialties } = props
  const router = useRouter();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(DoctorSchema),
    defaultValues: {...doctor}
  });
  

  const onSubmit = async (data) => {
    
    const newDoctor = {
      ...data,
      Specialties: data.Specialties.map(item => ({id: item}))
    }

    
    if (doctor?.id) {
      const url = `http://localhost:8080/doctors/${doctor.id}`
      const doctorRep  = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDoctor)
      }).then(res => res.json())
        .catch(erro => console.log(erro))
      // console.log('update')
      // console.log(doctorRep);
      router.push('/')
    } else {
      const url = `http://localhost:8080/doctors`
      const doctorRep  = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDoctor)
    }).then(res => res.json())
      .catch(erro => console.log(erro))
      // console.log('create')
      // console.log(doctorRep);
      router.push('/')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='columns'>
          <div className='column'>
            <div className="field">
              <label className="label">Nome</label>
              <div className="control">
                <input className={(errors.name?.message)? 'input is-danger': 'input' } 
                
                {...register("name")} 
                type="text" 
                placeholder="Nome do Medico" />
                {(errors.name?.message)? (
                <p className="help is-danger">{errors.name?.message}</p>
                ) : null}
              </div>
              
            </div>
            <div className="field">
              <label className="label">CRM</label>
              <div className="control">
                <input className={(errors.CRM?.message)? 'input is-danger': 'input' } {...register("CRM")} type="text" placeholder="CRM do Medico" />
              </div>
            </div>
            <div className="field">
              <label className="label">Telefone</label>
              <div className="control">
                <input className={(errors.phone?.message)? 'input is-danger': 'input' } {...register("phone")} type="number" placeholder="Telefone apenas numeros" />
              </div>
            </div>
            <div className="field">
              <label className="label">Celular</label>
              <div className="control">
                <input className={(errors.cell?.message)? 'input is-danger': 'input' } {...register("cell")} type="number" placeholder="Celular apenas numeros" />
              </div>
            </div>
            <div className="field">
              <label className="label">CEP</label>
              <div className="control">
                <input className={(errors.CEP?.message)? 'input is-danger': 'input' } {...register("CEP")} type="text" placeholder="CEP exemplo 31255-190" />
              </div>
            </div>
          </div>
          <div className='column'>
          <div className="field">
            <label className="label">Especialidades</label>
            <div className="control">
              <div className={(errors.Specialties?.message)? 'select is-multiple is-danger': 'select is-multiple' } >
                <select id="specialties" multiple size="8" {...register("Specialties")}>
                  { specialties?.map(item => (<option key={item.id} value={item.id} >{item.name}</option>)) }
                </select>
              </div>
              {(errors.Specialties?.message)? (
                <p className="help is-danger">{errors.Specialties?.message}</p>
                ) : null}
            </div>
            
          </div>
          </div>
        </div>
        
        
        {errors.exampleRequired && <span>This field is required</span>}
      
        <input className='button is-primary' type="submit" />
      </form>
    </div>
  );
}

export default FormDoctor;