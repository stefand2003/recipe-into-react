import './home.scss';
import React, { Profiler } from 'react';
import Header from '../components/header/header';
import Search from '../components/search/search';
import Catalogue from '../components/catalogue/catalogue';

const recipes = [
  {
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=700,636',
    name: 'Chorizo & mozarella gnocchi bake',
    producer: 'BBC Good Food',
  },

  {
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Almond-orange-and-ginger-Pesach-mandelbrot-d7c34d7.jpg?quality=90&webp=true&resize=900,817',
    name: 'Almond, orange & ginger Pesach mandelbrot',
    producer: 'Victoria Prever',
  },

  {
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Air-fryer-roast-dinner-b52967f.jpg?quality=90&webp=true&resize=900,817',
    name: 'Air fryer roast dinner',
    producer: 'Samuel Goldsmith',
  },

  {
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-fajitas-2-d7172f8.jpg?quality=90&webp=true&resize=440,400',
    name: 'Easy Chicken Fajitas',
    producer: 'Steven Morris',
  },
];

export default function Home() {
  return (
    <div className='homepage'>
      <Header />
      <Search />
      <div className='homepage__grid'>
        {recipes.map((recipe) => (
          <Catalogue
            image={recipe.image}
            name={recipe.name}
            producer={recipe.producer}
          />
        ))}
      </div>
    </div>
  );
}
