import React from "react";
import { Table } from "reactstrap";

export default function Elorejelzes({ idojarasInfo }) {
  if (idojarasInfo === null) {
    return <div>Válasszon egy várost</div>;
  }

  const napiAdatok = idojarasInfo.idojaras.daily;
  const mertekegysegek = idojarasInfo.idojaras.daily_units;
  const SorokJsx = [];

  for (let i = 0; i < 7; i++) {
    SorokJsx.push(
      <tr key={idojarasInfo.varos.id + napiAdatok.time[i]}>
        <th scope="row">{napiAdatok.time[i]}</th>
        <td>
          {napiAdatok.temperature_2m_min[i]} {mertekegysegek.temperature_2m_min}
        </td>
        <td>
          {napiAdatok.temperature_2m_max[i]} {mertekegysegek.temperature_2m_max}
        </td>
        <td>
          {napiAdatok.precipitation_sum[i]} {mertekegysegek.precipitation_sum}
        </td>
      </tr>
    );
  }

  return (
    <div>
      <Table dark hover responsive striped>
        <thead>
          <tr>
            <th>Dátum</th>
            <th>Minimum hőmérséklet {mertekegysegek.temperature_2m_min}</th>
            <th>Maximum hőmérséklet {mertekegysegek.temperature_2m_max}</th>
            <th>Csapadék {mertekegysegek.precipitation_sum}</th>
          </tr>
        </thead>
        <tbody>{SorokJsx}</tbody>
      </Table>
    </div>
  );
}
