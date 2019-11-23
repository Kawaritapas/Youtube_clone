import axios from 'axios';

const KEY='AIzaSyCDHa3xrHhmmSg9cLAWF-jSZ5yFxzi9cYs';


export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults:5,
    key: KEY
}


});