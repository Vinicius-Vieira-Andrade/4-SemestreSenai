import React from 'react'

const Table = () => {
  return (
    <table className='w-full mt-10'>
        <thead>
            <tr className='rounded bg-[#e1e0e7]'>
                <th className='py-5 px-10 text-left'>Identição do ativo</th>
                <th className='py-5 px-10 text-left'>Nome do ativo</th>
                <th className='py-5 px-10 text-left'>Data do registro</th>
                <th className='py-5 px-10 text-left'>Ações do ativo</th>
            </tr>
        </thead>
    </table>
  )
}

export default Table