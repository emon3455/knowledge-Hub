import React from 'react';

const Blog = () => {
    return (
        <div className='my-6 shadow-violet-400 shadow-2xl p-2 pb-4 rounded-lg'>

            <h2 className='text-center text-3xl font-bold my-6'>Frequently Asked Questions??</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-bold">
                        Props vs state
                    </div>
                    <div className="collapse-content text-xl"> 
                        <p><span className='font-bold'>Props: </span> is object. which is immutable. props is passed through out Components. we cannot change the value of props. 
                        </p>
                        <p><span className='font-bold'>State:</span> is changeable. Basically it change based on event. and by using state variable and function we handle the updated data.</p>
                    </div>
                </div>

                <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-bold">
                        How does useState work?
                    </div>
                    <div className="collapse-content text-xl"> 
                        <p>
                            Basically, useState is a react hook which is used to handle changable value. It actually return an array where first element is the current value and second element is a function which is used to update the current value.
                        </p>
                    </div>
                </div>

                <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-bold">
                        Focus me to see content
                    </div>
                    <div className="collapse-content"> 
                        <p>tabIndex={2} attribute is necessary to make the div focusable</p>
                    </div>
                </div>

                <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-bold">
                        Focus me to see content
                    </div>
                    <div className="collapse-content"> 
                        <p>tabIndex={3} attribute is necessary to make the div focusable</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;