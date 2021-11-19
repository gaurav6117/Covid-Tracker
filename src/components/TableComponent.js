import { useEffect } from "react"
import React from 'react'
import { Table } from 'react-bootstrap'
export default function TableComponent(props) {
    const covidData = props.data
    return (
        <div className="container">
            <h3>Reported Cases and Deaths by Country or Territory</h3>
            <p>The coronavirus COVID-19 is affecting 200+ countries and territories. The day is reset after midnight GMT+0. The list of countries and their regional classification is based on the United Nations Geoscheme. Sources are provided under "About Section."</p>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Country<br /> Code</th>
                        <th>Total<br /> Cases</th>
                        <th>New<br /> Cases</th>
                        <th>Total<br /> Deaths</th>
                        <th>New<br /> Deaths</th>
                        <th>Total<br /> Recovered</th>
                        <th>New<br /> Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ backgroundColor: "#ddd" }}>
                        <td></td>
                        <td>Global</td>
                        <td>World</td>
                        <td>254631355</td>
                        <td>374925</td>
                        <td>5120338</td>
                        <td>5742</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    {covidData.Countries ? covidData.Countries.map((elem, index) =>
                        <tr key={index + "covidData"} style={{ fontWeight: "bold" }}>
                            <td>{index + 1}</td>
                            <td style={{ color: "blue", textAlign: "left" }}>{elem.Country}</td>
                            <td>{elem.CountryCode}</td>
                            <td>{elem.TotalConfirmed}</td>
                            <td>{elem.NewConfirmed}</td>
                            <td>{elem.TotalDeaths}</td>
                            <td style={{ backgroundColor: "red", color: "white" }}>+{elem.NewDeaths}</td>
                            <td>{elem.TotalRecovered}</td>
                            <td>{elem.NewRecovered}</td>
                        </tr>
                    ):''}
                </tbody>
            </Table>
        </div>
    )
}
