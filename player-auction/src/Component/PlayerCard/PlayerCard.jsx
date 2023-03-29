import React from "react";

const PlayerCard = ({ player, addToEleven }) => {
    const { name, price, image, rating, role } = player;
  return (
    <div>
      <div className="bg-base-100 shadow-xl py-5 rounded-xl">
        <figure className="px-10 pt-10 mb-4">
          <img src={image} alt="Shoes" className="rounded-xl w-full" />
        </figure>
        <div>
          <h2 className="card-title ps-2">{name}</h2>
          <p className="ps-2">Role: {role}</p>
          <p className="ps-2">Ratings: {rating}</p>
          <p className="ps-2 font-semibold">
            Price: <span className="text-error">{price}</span> BDT
          </p>
          <div className="text-center pt-2">
            <button onClick={()=>addToEleven(player)} className="btn btn-accent">Add to (XI)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
