import React from 'react';

const Cart = (props) => {

    const bookMarked = props.bookMarked;

    return (
        <div className='space-y-2 sticky top-0'>

            <div className=" bg-violet-100 p-2 rounded-md border-2 border-indigo-300 text-center text-xl font-semibold text-violet-500">
                <h2>Spent Time On Read: {props.time} Min</h2>
            </div>

            <div className="bg-gray-200 p-2 rounded-md space-y-3">
                <h2 className='text-xl font-semibold'>Bookmarked Blogs: {bookMarked.length}</h2>
                <div className="">
                    {
                        bookMarked.map((mark,index)=>{
                            return <div key={index} className='bg-white  rounded-xl'>

                                    <div className='card mb-2 shadow-2xl'>

                                        <h3 className='text-2xl text-center p-2 rounded-xl'>{mark}</h3>

                                    </div>
                                
                                </div>
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default Cart;