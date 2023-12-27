import axios from 'axios'
import { useEffect } from 'react'


const CustomiseHook = (url, options) => {

    // const [resultats, SetResultats] = useState([]);
const resultats=[]

    // useEffect(() => {
        
        return axios.get(url, options)

    // }, [url])

    // return resultats;
}

export default CustomiseHook
