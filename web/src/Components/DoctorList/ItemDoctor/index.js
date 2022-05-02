import Link from 'next/link';
import React from 'react';

function ItemDoctor(props) {
  const { doctor } = props;
  return (
      <tr>
          <td>{ doctor?.name }</td>
          <td>{ doctor?.CRM }</td>
          <td>{ doctor?.phone }</td>
          <td>{ doctor?.cell }</td>
          <td>{ doctor?.CEP }</td>
          <td>
            { doctor?.address } - { doctor?.complement } - { doctor?.district } -
            { doctor?.locality } - { doctor?.state }
          </td>
          <td>
            <ul className='content'>
{ doctor?.Specialties?.map(item => (<li key={item.id}><span className="tag is-info">{item.name}</span></li>)) }
            </ul>
          </td>
          <td>
            <Link href={`/update/${doctor?.id}`}>
              <a className="button is-success">
                <span>update</span>
              </a>
            </Link>
            <Link href={`/remove/${doctor?.id}`}>
              <a className="button is-danger">
                <span>Remover</span>
              </a>
            </Link>
          </td>
        </tr>
  );
}

export default ItemDoctor;