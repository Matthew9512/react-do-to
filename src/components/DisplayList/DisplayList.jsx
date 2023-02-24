import React from 'react';
import { deleteTask } from '../helper';
import './DisplayList.css';

function DisplayList({ task }) {
  //
  return (
    <section onClick={deleteTask} className='list'>
      {task.map((value) => {
        return (
          <div key={value.id} className='list__item'>
            <p className='list__item-title'>{value.task}</p>
            <button className='btn btn-remove'>remove</button>
          </div>
        );
      })}
    </section>
  );
}

export default DisplayList;
