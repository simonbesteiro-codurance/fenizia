import React from "react";
import FavouriteList from "./FavouriteList";

function Favourite({favouriteList}) {
  console.log(favouriteList);
  return <>{favouriteList.map((element)=><FavouriteList  key={element} id={element}/>)}</>;
}

export default Favourite;
