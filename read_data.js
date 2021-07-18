const axios = require('axios')
const fs = require('fs');
const TWITTER_URL = 'https://api.twitter.com/1.1/search'

const api = axios.create({
  baseURL: TWITTER_URL,
  timeout: 1000,
});

const data = []

async function monarkAndNando() {
    const monark = await api.get('tweets.json?q=from:monark&count=100')
    const outputMonark = monark.data.statuses.map((t) => {
        return {
            input: t.text,
            output: 'Monark'
        }
    })
    const moura = await api.get('tweets.json?q=from:moura_101&count=100')
    const outputNandoMoura = moura.data.statuses.map((t) => {
        return {
            input: t.text,
            output: 'Nando Moura'
        }
    })

    fs.writeFileSync('data/monark_and_nando.json', JSON.stringify([...outputMonark, ...outputNandoMoura]))
}

async function lulaAndBolsonaro() {
    const monark = await api.get('tweets.json?q=from:LulaOficial&count=100')
    const outputMonark = monark.data.statuses.map((t) => {
        return {
            input: t.text,
            output: 1
        }
    })
    console.log("Lula", outputMonark.length)
    const moura = await api.get('tweets.json?q=from:JairBolsonaro&count=100')
    const outputNandoMoura = moura.data.statuses.map((t) => {
        return {
            input: t.text,
            output: 0
        }
    })

    console.log("bolsonaro", outputNandoMoura.length)

    fs.writeFileSync('data/lula_and_bolsonaro.json', JSON.stringify([...outputMonark, ...outputNandoMoura]))
}

lulaAndBolsonaro()
