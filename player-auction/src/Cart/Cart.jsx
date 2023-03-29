import React from 'react';

const Cart = ({ cartPlayer }) => {
    // console.log(cartPlayer);
    let totalPrice = 0;
    let playerName = [];
    for (const player of cartPlayer) {
        totalPrice = totalPrice + player.price;
        playerName.push(player.name);
    }
    const tax = totalPrice * 0.01;
    return (
        <div className='w-full bg-orange-500 text-white px-6 py-3 sticky top-0 rounded-xl'>
            <h1 className='text-center text-3xl font-semibold underline'>Best Eleven</h1>
            <div className='mt-5 font-semibold'>
                <p className='pb-2'>Selected Player:{cartPlayer.length} </p>
                <p className='pb-2'>Players Name: <span className='text-sm'>{...playerName.join(' , ')}</span></p>
                <p className=''>Price:{totalPrice}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <p className='font-bold text-emerald-200'>Grand Total:  {totalPrice + tax} <span className='text-white'>BDT</span></p>
            </div>
        </div>
    );
};

export default Cart;