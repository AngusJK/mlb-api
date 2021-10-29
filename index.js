import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config()

const apiKey = process.env.API_KEY

fetch('https://api.sportsdata.io/v3/mlb/scores/json/Players/NYY', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': `${apiKey}`,
    'Access-Control-Allow-Origin': '*'
  }
}).then(res => res.json())
.then(players => {
  for (let player of players) {
    if (player['Status'] === 'Active') {
    let firstName = player['FirstName']
    let lastName = player['LastName']
    console.log(`${firstName} ${lastName}`)
    }
  }
})
  