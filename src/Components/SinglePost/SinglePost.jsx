import React from 'react';

const SinglePost = (props) => {

    const {id , author, title, time, banner, date,logo} = props.post

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
                                {time} Min Read <span className='cursor-pointer fa-xl '> <i className="fa-regular fa-bookmark"></i> </span>
                            </h2>
                        </div>

                    </div>

                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-start">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SinglePost;