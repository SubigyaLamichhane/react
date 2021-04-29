import React,{useState, useEffect} from 'react';
import axios from 'axios';

const RenderList = (props) => {
    const [response, setResponse] = useState([]);
    const fetchData = async (resource) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResponse(res.data);
    }
    useEffect(()=>{
            fetchData(props.resource);
        },
        [props.resource]
    );
    return(<div>{response.map(data=><li key={data.key}>{data.title}</li>)}</div>);
}

export default RenderList;