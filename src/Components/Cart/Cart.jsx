import React from 'react';

const Cart = (props) => {
    return (
        <div className=''>

            <div className=" bg-violet-100 rounded-md border-2 border-indigo-300 text-center text-xl font-semibold text-violet-500">
                <h2>Spent Time On Read: {props.time} Min</h2>
            </div>

        </div>
    );
};

export default Cart;