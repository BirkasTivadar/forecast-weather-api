import React from "react";

export default function Elorejelzes({ idojarasInfo }) {
  if (idojarasInfo === null) {
    return <div>Choose city</div>;
  }
  return <div>{JSON.stringify(idojarasInfo)}</div>;
}
