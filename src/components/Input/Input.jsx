import React, { useRef } from 'react';
import { setlocalStorage } from '../helper';
import '../DisplayList/DisplayList.css';
import './Input.css';

function Input(props) {
  //
  const inputValue = useRef();
  const id = new Date().getTime();

  const saveTask = function () {
    const task = inputValue.current.value;
    const item = {
      id: id,
      task: task,
    };

    props.save(item);
    setlocalStorage(item);

    inputValue.current.value = '';
  };

  return (
    <div className='tools'>
      <input ref={inputValue} className='input' type='text' placeholder='newxt task' />
      <button onClick={saveTask} className='btn btn-add'>
        add
      </button>
    </div>
  );
}

export default Input;
