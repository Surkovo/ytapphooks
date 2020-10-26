import axios from 'axios';

const KEY = 'AIzaSyC9StGScnD1rrHL2X7GTDpsAIxQ62URi2U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})

