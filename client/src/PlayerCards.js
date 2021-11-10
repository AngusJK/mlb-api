import React from 'react'
import './PlayerCards.css'

function PlayerCards() {
  // const [player, setPlayer] = useState([
  //   {
  //     playerName: 'Vladimir Guerrero',
  //     imageUrl: ''
  //   }
  // ]) 
  const player = { playerName: 'Vladimir Guerrero', imageUrl: 'https://calltothepen.com/wp-content/uploads/imagn-images/2017/07/16546683.jpeg' }
  return (
    <div className="player-cards"> 
      <h1>{player.playerName}</h1>
      <div className="player-image">
        <img  src="https://calltothepen.com/wp-content/uploads/imagn-images/2017/07/16546683.jpeg" alt=""/> 
      </div> 
    </div>
  )
}

export default PlayerCards
