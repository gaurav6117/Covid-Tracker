// importing modules
import { useState, useEffect } from "react"
import axios from 'axios'
import TableComponent from "./TableComponent"
import { Carousel, Container, Table } from "react-bootstrap"
import Search from "./Search"
export default function Home() {
    // loading data before rendering
    useEffect(() => {
        axios.get("https://api.covid19api.com/summary")
            .then(res => setstate(res.data))
    }, [])
    // defining state
    const [covidData, setstate] = useState([])
    return (
        <div className="text-center">
            {/* ----------------------------------------------carosel --------------------------------------- */}
            <div className="contains">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 m-auto"
                            src="ma.jpg"
                            height="485px"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="b.gif"
                            height="485px"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="h.jpg"
                            height="485px"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel><br />

                {/* -----------------------------------------------carosel end ----------------------- */}
                {/* <!--   ---------------------------------------------three buttons-------------------------------------------- --> */}
                <div className=" m-auto">
                    <button class="btn-primary three-btn"><i class="fa fa-weixin"> </i> MAINTAIN DISTANCE</button>
                    <button class="btn-danger three-btn"><i class="fa fa-heartbeat"> </i> WEAR MASK</button>
                    <button class="btn-warning thre-btn"><i class="fa fa-bath"> </i> REGULARLY WASH HANDS</button>
                </div>
                {/* ------------------------------------------ global case div ----------------------------------- */}
                <p className="infoPanel"><span>For Information on COVID-19</span></p>
                <div className="row m-auto">
                    {/* column 1 */}
                    <div className="col-lg-3">
                        COVID-19 INDIA as on :<br /> <b>18 November 2021, 08:00</b><br /> IST (GMT+5:30)<br />
                        (↑↓ Status change since yesterday)
                    </div>
                    {/* column 2 */}
                    <div className=" blockflexing col-lg-9">
                        <section className="div1">
                            <h3>Total Confirmed</h3>
                            <h3>{covidData.Global ? covidData.Global.TotalConfirmed : ""}</h3>
                        </section>
                        <section className="div1">
                            <h3>Total Deaths</h3>
                            <h3>{covidData.Global ? covidData.Global.TotalDeaths : ''}</h3>
                        </section>
                        <section className="div1">
                            <h3>New Confirmed</h3>
                            <h3>{covidData.Global ? covidData.Global.NewConfirmed : ""}</h3>
                        </section>
                        <section className="div1">
                            <h3>New Deaths</h3>
                            <h3>{covidData.Global ? covidData.Global.NewDeaths : ''}</h3>
                        </section>
                    </div>
                </div>
                <p style={{ clear: "both" }}></p>
                <div className="infoPanel">
                    <marquee>Total number of covid-19 cases as of today is {covidData.Global ? covidData.Global.TotalConfirmed : ""} </marquee>
                    <p>For any query related covid-19, you may kindly visit the WHO website on: https://covid19.who.int/  </p>
                </div>
                {/* search component */}
                <Search data={covidData} />
                <br />
                {/* table component */}
                <TableComponent data={covidData} />
            </div>
        </div>
    )
}
