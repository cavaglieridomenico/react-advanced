import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams();
  useEffect(() => {
    const newName = data.find(item => item.id === parseInt(id));
    setName(newName.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people' className='btn'>
        Back to People
      </Link>
    </div>
  );
};

export default Person;
