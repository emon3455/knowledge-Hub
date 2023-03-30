import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SinglePost from '../SinglePost/SinglePost';

const PostContainer = () => {

    const [posts,setPosts] = useState([]);
    const [time,setTime] = useState(0);

    const handleTime=(tm)=>{
        setTime(time+tm);
    }

    useEffect(()=>{
        try{
            fetch("data.json")
            .then(res=>res.json())
            .then(data=> setPosts(data))
        }
        catch(ex){
            console.log(ex);
        }
    },[])


    return (
        <>

            <div className="my-2 flex gap-2 flex-col md:flex-row p-2">

                <div className="md:w-2/3">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">

                        {
                            posts.map(post=> <SinglePost
                                post={post}
                                key={post.id}
                                handleTime={handleTime}
                                
                                ></SinglePost>)
                        }

                    </div>

                </div>

                <div className=" md:w-1/3">

                    <Cart time={time}></Cart>

                </div>


            </div>

        </>
    );
};

export default PostContainer;