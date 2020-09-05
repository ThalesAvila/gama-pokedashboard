import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";

const DashboardBox = styled.div`
  padding: 20px 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-flow: wrap;
`;

const Dashboard = () => {
  const [pokemonList, updatePokemonList] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then((response) => {
      updatePokemonList(response.data.results);
    });
  }, []);

  return (
    <DashboardBox>
      {pokemonList.map(({ name, url }) => {
        return <PokemonCard name={name} />;
      })}
    </DashboardBox>
  );
};

export default Dashboard;
