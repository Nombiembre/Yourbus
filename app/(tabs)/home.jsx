import React, { useContext } from "react";
import { AuthContext } from "../../src/context/AuthContext";
import HomeLayout from "../../src/layouts/HomeLayout";
import Search from "../../src/sections/home/Search";
import Sugerencias from "../../src/sections/home/Sugerencias";
import Rutas from "../../src/sections/home/Rutas";

export default function Home() {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <HomeLayout>
      <Search />
      <Sugerencias />
      <Rutas />
    </HomeLayout>
  );
}
