var myHeaders = new Headers()
myHeaders.append('apikey', 'bugLx905hR2tlvf70FB003g2OvClt0sG')

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
}

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest'

module.exports = { BASE_URL, requestOptions }
