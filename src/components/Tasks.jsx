import React from 'react'
import NewTask from './NewTask';

const Tasks = () => {
  return <section>
    <h2 className='text-2xl font-bold text-slate-700 mb-4'>Tasks</h2>
    <NewTask />
    <p className='text-slate-800 my-4'>This project does not have any tasks yet.</p>
  </section>
}

export default Tasks;