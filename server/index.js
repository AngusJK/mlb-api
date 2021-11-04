const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

// import fetch from "node-fetch"



const getPlayers = () => {
  const apiKey = "cb2f338924cc4becafb984ba0862d3e4"

  fetch('https://api.sportsdata.io/v3/mlb/scores/json/Players/TOR', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': `${apiKey}`,
      'Access-Control-Allow-Origin': '*'
    }
  }).then(res => res.json())
  .then(data => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}



app.get('/api/players', (req, res) => {
  getPlayers()
  //res.json('Hello from the other side')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


// import { config } from 'dotenv';
// config();

// const apiKey = process.env.API_KEY

// let data = ''
//   const apiKey = "cb2f338924cc4becafb984ba0862d3e4"

//   fetch('https://api.sportsdata.io/v3/mlb/scores/json/Players/TOR', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Ocp-Apim-Subscription-Key': `${apiKey}`,
//       'Access-Control-Allow-Origin': '*'
//     }
//   }).then(res => res.json())
//   .then(players => {
//     let picture;
//     for (let player of players) {
//       if (player['FirstName'] = 'Vladimir') {
//         picture = player['PhotoUrl']
//       }
//     }
//     data = picture
//   }).catch((err) => {
//     console.log(err)
//   })
