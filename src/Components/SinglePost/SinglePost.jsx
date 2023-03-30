import React from 'react';

const SinglePost = (props) => {

    const {id , author, title, time, banner, date,logo} = props.post;

    const handleTime = props.handleTime;
    const handleBookMarked = props.handleBookMarked;

    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl">

                <figure className='w-full'>
                    <img className='w-full' src={banner} alt="Shoes" />
                </figure>

                <div className="card-body">

                    <div className="flex justify-between items-center">

                        <div className="flex justify-between items-center w-1/2">

                            <div className="w-1/3">
                                <img className='rounded-full w-10' src={logo} alt="" />
                            </div>

                            <div className="w-2/3">
                                <h4 className='text-sm font-bold'>{author}</h4>
                                <p className='text-sm'>{date}</p>
                            </div>

                        </div>
                        <div className="">
                            <h2>
                                {time} Min Read <span onClick={()=>handleBookMarked(title)} className='cursor-pointer fa-lg bg-violet-600 text-white px-2 py-1 rounded-md hover:bg-gray-500 transition-all'> <i className="fa-regular fa-bookmark"></i> </span>
                            </h2>
                        </div>

                    </div>

                    <h2 className="card-title">{title}</h2>
                    <p className='text-gray-500'>#BlogPost #Writing</p>
                    <div className="card-actions justify-start">
                        <a onClick={()=> handleTime(time)} className="text-violet-500 text-sm font-semibold cursor-pointer underline underline-offset-1">Mark As Read</a>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SinglePost;