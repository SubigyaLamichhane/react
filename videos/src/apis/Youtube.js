
import axios from 'axios';


const k = 'AIzaSyDucNuGVvCUU29efYa-gbJtzywk7SWDmKs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet" ,
        maxResults: 5,
        key: k
    }
});