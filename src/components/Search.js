import React, { useState, useRef } from 'react'
import { Card } from 'react-bootstrap';
export default function Search(props) {
    const covidData = props.data;
    const countrySelection = useRef(null)
    const selectcountry = () => {
        const index = countrySelection.current.value
        const selected = covidData.Countries[index];
        setstate(selected)
    }
    const [selectedCountry, setstate] = useState([])
    return (
        <div className="row m-auto">
            <div className="col-lg-8 mainDiv">
                <section className="section1">
                    <h3>SEARCH BY COUNTRY</h3>
                </section>
                <section className="section1">
                    <select class="form-select" ref={countrySelection} onClick={() => selectcountry()} aria-label="Default select example">
                        <option value="0">Select Country</option>
                        {covidData.Countries ? covidData.Countries.map((elem, index) =>
                            <option value={index} key={elem.ID}> {elem.Country}</option>
                        ) : ''}
                    </select>
                </section><br/>
                <section className="row m-auto">
                    <section className="col-lg-4">
                            <h3>COUNTRY: {selectedCountry.Country}({selectedCountry.CountryCode})</h3><br/>
                            <h5>DATE:   {selectedCountry.Date ? selectedCountry.Date.slice(0,10):''}</h5>
                    </section>
                    <section className=" row col-lg-8">
                        <div className="card cardSetting col-lg-5">
                            <div class="card-body">
                                Total Cases<br/> {selectedCountry.TotalConfirmed}
                            </div>
                        </div>
                        <div className="card cardSetting col-lg-5">
                            <div class="card-body">
                                New Cases<br/> {selectedCountry.NewConfirmed}
                            </div>
                        </div>
                        <div className="card cardSetting col-lg-5">
                            <div class="card-body">
                                Total Recovered<br/> {selectedCountry.TotalRecovered}
                            </div>
                        </div>
                        <div className="card cardSetting col-lg-5">
                            <div class="card-body">
                                New Recovered<br/> {selectedCountry.NewRecovered}
                            </div>
                        </div>
                        <div className="card cardSetting col-lg-5">
                            <div class="card-body">
                                Total Deaths<br/> {selectedCountry.TotalDeaths}
                            </div>
                        </div>
                        <div className="card cardSetting col-lg-5">
                            <div class="card-body">
                                New Deaths<br/> {selectedCountry.NewDeaths}
                            </div>
                        </div>
                    </section>
                </section>

            </div>
            <div className="col-lg-4">
                <img src="post.gif" height="500px" width="400px" alt="" />
            </div>
        </div>
    )
}
