import logo from './logo.svg';
import './App.css';
import CardList from './exercise/CardList';
import { useState } from 'react'
import Form from './exercise/Form';
import BoredApi from './BoredApi';


const App = () => {
  const [cards, setCards] = useState([])
  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div className='gitApi'>
      <BoredApi></BoredApi>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App;
