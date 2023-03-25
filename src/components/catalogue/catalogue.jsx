import React from 'react';
import './catalogue.scss';

export default function catalogue(props) {
  const { image, name, producer } = props;

  return (
    <main className='recipes'>
      <div className='recipes__card'>
        <img src={image} />
        <div>{name}</div>
        <p>{producer}</p>
      </div>
    </main>
  );
}
