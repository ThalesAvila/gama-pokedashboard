import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  let { name } = useParams();
  return <div>{name}</div>;
};

export default PokemonDetail;
