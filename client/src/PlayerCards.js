import React, { useState, useEffect }from 'react'
import Axios from 'axios'
import './PlayerCards.css'

const PlayerCards = () => {
  const [players, setPlayers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    //const apiKey = 'cb2f338924cc4becafb984ba0862d3e4'
    const fetchItems = async () => {
      const result = await Axios (`https://www.breakingbadapi.com/api/characters` 
      // const result = await Axios (`https://api.sportsdata.io/v3/mlb/scores/json/Players/TOR` 
      // { method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Ocp-Apim-Subscription-Key': `${apiKey}`,
      //     'Access-Control-Allow-Origin': '*'
      //   }
      //}
      )
      
      setPlayers(result.data)
      setIsLoading(false)
      console.log(isLoading)
    }
    fetchItems()
  }, [])
  return (
    <div>
      <h1>Hello from the React MLB API (Player Cards Component)</h1>
      <h5>{players[0].portrayed}</h5>
      <h5>{players[1].portrayed}</h5>
      <h5>{players[2].portrayed}</h5>
      <h5>{players[3].portrayed}</h5>
      <h5>{players[4].portrayed}</h5>
    </div>
  ) 
}

export default PlayerCards

