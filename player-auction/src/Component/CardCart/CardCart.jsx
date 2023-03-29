import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./CardCart.css";

const CardCart = () => {
  const [players, setPlayers] = useState([]);
  const [cartPlayer, setCartPlayer] = useState([]);
  useEffect(() => {
    fetch("cricket.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);


  const addToEleven = (player) => {
    // const newCart = [...cartPlayer, player];
    const exists = cartPlayer.find((pl) => pl.id === player.id);
    if (exists) {
      alert("The Player Already Added");
    } else {
      const newCart = [...cartPlayer, player];
      setCartPlayer(newCart);
    }

    let localCart = [];
    const previousAddedPlayer = JSON.parse(localStorage.getItem("player-cart"));
    if (previousAddedPlayer) {
      const isThisAlreadyAdded = previousAddedPlayer.find(pap => pap.id === player.id);
      if (isThisAlreadyAdded) {
        
      } else {
        localCart.push(...previousAddedPlayer, player);
        localStorage.setItem('player-cart', JSON.stringify(localCart));
      }
    } else {
      localCart.push(player);
      localStorage.setItem('player-cart', JSON.stringify(localCart))
    }
  };
  // console.log(cartPlayer);
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto md:mx-4">
          {players.map((player) => (
            <PlayerCard
              player={player}
              key={player.id}
              addToEleven={addToEleven}
            ></PlayerCard>
          ))}
        </div>
        <div className=" w-full md:w-3/12 mt-6 md:mt-0">
          <Cart cartPlayer={cartPlayer}></Cart>
        </div>
      </div>
    </>
  );
};

export default CardCart;
