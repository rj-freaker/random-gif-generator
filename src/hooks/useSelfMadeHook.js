import {useState} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useSelfMadeHook(tag) {
    
    const [gify,setGify] = useState('');
    const [loading,setLoading] = useState(false);
    async function getGifData(tag){
        try{
            setLoading(true);

            const {data} = await axios.get(
                (tag ? `${url}&tag=${tag}` : url));
            const iamgeURL = data.data.images.downsized_medium.url;
            
            setGify(iamgeURL);
            setLoading(false);
        }catch(e){
            console.log('error in loading from api :' ,e);
        }
    }

    return {gify,loading,getGifData};
}
