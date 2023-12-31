import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SinglePost from '../SinglePost/SinglePost';
import { ToastContainer, toast } from 'react-toastify';

const PostContainer = () => {

    const [posts,setPosts] = useState([]);
    const [time,setTime] = useState(0);
    const [bookMark , setBookMark] = useState([])

    const handleTime=(tm)=>{
        setTime(time+tm);
    }

    const handleBookMarked=(mark)=>{

        const result = bookMark.includes(mark);
        if(result){
            toast("You Have Already Bookmarked This Blog!");
        }
        else{
            const newBooked = [...bookMark, mark];
            setBookMark(newBooked);
        }      
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

            <div className="my-2 flex gap-4 flex-col md:flex-row p-2">

                <div className="md:w-2/3">

                    <div className="grid grid-cols-1  gap-4 justify-items-center">

                        {
                            posts.map(post=> <SinglePost

                                post={post}
                                key={post.id}
                                handleTime={handleTime}
                                handleBookMarked={handleBookMarked}
                                >

                            </SinglePost>)
                        }

                    </div>

                </div>

                <div className=" md:w-1/3 relative">

                    <Cart time={time} bookMarked={bookMark}></Cart>

                </div>

            </div>

        </>
    );
};

export default PostContainer;