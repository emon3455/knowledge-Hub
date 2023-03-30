import React, { useEffect, useState } from 'react';

const PostContainer = () => {

    const [posts,setPosts] = useState([]);

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
    console.log(posts);

    return (
        <>

            <div className="mt-2 flex gap-2 flex-col md:flex-row">

                <div className="bg-orange-300 md:w-2/3">

                    <div className="">

                        {
                            posts.map(post=> <h1>hello</h1>)
                        }

                    </div>

                </div>

                <div className="bg-red-500 md:w-1/3">

                    <h2>hlw</h2>

                </div>


            </div>

        </>
    );
};

export default PostContainer;