import React from 'react';

const Cart = ({ cartPlayer }) => {
    console.log(cartPlayer);
    
    return (
        <div className='w-full bg-orange-500 text-white px-6 py-3 sticky top-0 rounded-xl'>
            <h1 className='text-center text-3xl font-semibold underline'>Best Eleven</h1>
            <div className='mt-5 font-semibold'>
                <p className=''>Selected Player:{cartPlayer.length} </p>
                <p >Price: </p>
                <p>Tax: </p>
                <p className='font-bold text-emerald-200'>Grand Total:</p>
            </div>
        </div>
    );
};

export default Cart;