const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const cors = require('cors')

app.use(cors())

// const getPlayers = () => {
  
// }

app.get('/api', (req, res) => {
  res.json({message: 'The express server is connected to the React interface'})
  console.log('This is the express server at /api.')
})


// const players = [{firstName: "Roostrick", lastName: "van Kollistrand"}, {firstName: "Francis", lastName:"Coppola"}]
// app.get('/api', async (req, res) => {
  // const apiKey = "cb2f338924cc4becafb984ba0862d3e4"
  
  // await fetch('https://api.sportsdata.io/v3/mlb/scores/json/Players/TOR', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Ocp-Apim-Subscription-Key': `${apiKey}`,
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // }).then(res => res.json())
  // .then(data => {
  //   console.log(data)
  //   res.send({ message: data })
  // }).catch((err) => {
  //   console.log(err)
  // })
  //res.json({message: `here is the data:`})
// })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}...`)
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
