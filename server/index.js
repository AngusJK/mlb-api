const express = require("express")
const PORT = process.env.PORT || 3001
const app = express()

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!'})
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

// import fetch from "node-fetch"
// import { config } from 'dotenv';
// config();

// const apiKey = process.env.API_KEY

// const apiKey = "cb2f338924cc4becafb984ba0862d3e4"

// fetch('https://api.sportsdata.io/v3/mlb/scores/json/Players/TOR', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'Ocp-Apim-Subscription-Key': `${apiKey}`,
//     'Access-Control-Allow-Origin': '*'
//   }
// }).then(res => res.json())
// .then(players => {
//   let picture;
//   for (let player of players) {
//     if (player['FirstName'] = 'Vladimir') {
//       picture = player['PhotoUrl']
//     }
//   }
//   document.getElementById('image').innerHTML = picture
// }).catch((err) => {
//   console.log(err)
// })

// const playerName = "Vladimir Guerrero"
// const playerNumber = "27"

// const addInfo = () => {
//   document.getElementById('image').innerHTML = `<h1>${playerName}<h1><h3>${playerNumber}<h3>`
// }

// addInfo()