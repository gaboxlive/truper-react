import React from "react";
import { Route, Routes } from "react-router";

const PokemonListado = React.lazy(() => import("../views/PokemonListado"));
const PokemonDetails = React.lazy(() => import("../views/PokemonDetails"));

export const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <PokemonListado />
        </React.Suspense>
      }
    ></Route>
    <Route
      path="/pokemon"
      element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <PokemonDetails />
        </React.Suspense>
      }
    ></Route>
    *
  </Routes>
);
