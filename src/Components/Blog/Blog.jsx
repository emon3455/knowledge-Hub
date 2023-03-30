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
                        Purpose of useEffect other than fetching data.
                    </div>
                    <div className="collapse-content text-xl"> 
                        <p>
                            useEffect is a powerfull react hook which can be used for various types of work not only fetching data. It is a help to perform side effect. also by using useEffect we can update DOM easily. Also we can do conditional randaring by using useEffect. Also we can trigger various task depends on condition that means second parameter of useEffect. so we  can say it has many more Purpose to use not only fetching.
                        </p>
                    </div>
                </div>

                <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-bold">
                        How Does React work?
                    </div>
                    <div className="collapse-content text-xl"> 
                        <p>
                            React split the website into different different component. Where Component is nothing but function. It also has a vertual dom at first it do update on virtual DOM and by using diff algorithm it compare old vartual DOM and  new vertual dom and agfter detecting which component is changed it do update original DOM and  because of that react is more efficient and more effective. React use declarative approach for event handeling. this is how react works.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;