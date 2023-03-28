import React from 'react';

const Cart = ({ cartPlayer }) => {
    // console.log(cartPlayer);
    let totalPrice = 0;
    for (const player of cartPlayer) {
        totalPrice = totalPrice + player.price;
    }
    const tax = totalPrice * 0.01;
    return (
        <div className='w-full bg-orange-500 text-white px-6 py-3 sticky top-0 rounded-xl'>
            <h1 className='text-center text-3xl font-semibold underline'>Best Eleven</h1>
            <div className='mt-5 font-semibold'>
                <p className=''>Selected Player:{cartPlayer.length} </p>
                <p >Price:{totalPrice}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <p className='font-bold text-emerald-200'>Grand Total:{totalPrice + tax}</p>
            </div>
        </div>
    );
};

export default Cart;