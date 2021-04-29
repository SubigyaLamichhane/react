import React, { useState } from 'react';
import RenderList from './RenderList';

const App = () => {
    const [response, setResponse] = useState('posts');
    return(
        <div>
            <button onClick={()=>setResponse('posts')} className="ui button outline grey">Posts</button>
            <button onClick={()=>setResponse('todos')} className="ui button outline blue">Todos</button>
            <RenderList resource={response}/>
        </div>
    );
};

export default App;