import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadPostStart} from '../redux/app.actions';
import Unit from '../components/Unit.js';

import {Button} from 'antd';

const FetchPost = () => {
    const dispatch = useDispatch();
    const fetchPost = () => {
dispatch(loadPostStart())
    }  

    const state = useSelector((state) => ({...state.app}));
return(
    <>
<Button onClick={fetchPost}>All</Button>
<Button onClick={fetchPost}>Dark</Button>
<Button onClick={fetchPost}>Feudal</Button>
<Button onClick={fetchPost}>Castle</Button>
<Button onClick={fetchPost}>Imperial</Button>

{!state.loading &&
 state.posts.map((post) => (
     <Unit key={post.id} unit={post}>
</Unit>
))}
</>
    )
}
export default FetchPost;