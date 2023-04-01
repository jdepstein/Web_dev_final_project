import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/standings',
    params: {league: 'standard', season: '2022'},
    headers: {
        'X-RapidAPI-Key': '1998d212e4mshad0ae3aca89905dp189a73jsnb9864ccfb4fe',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});a