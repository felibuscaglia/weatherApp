import React from "react";
import './Ciudad.css'
/*  export default function Ciudad({ city }) {
    if (city.length === 1) {
        return (
            <div className="ciudad">
                <div className="container">
                    <h2 id="cityName">{city [0].name}</h2>
                    <div className="info">
                        <div className="info1"><span className="infoTitle">Temperature 🌡️</span> {city [0].temp} ºC</div>
                        <div className="info1"><span className="infoTitle">Weather ☀️</span> {city [0].weather}</div>
                        <div className="info1"><span className="infoTitle">Wind 💨</span> {city [0].wind} km/h</div>
                        <div className="info1"><span className="infoTitle">Cloud quantity ☁️</span> {city [0].clouds}</div>
                        <div className="info1"><span className="infoTitle">Latitude 🌐</span> {city [0].latitud}º</div>
                        <div className="info1"><span className="infoTitle">Longitude 🧭</span> {city [0].longitud}º</div> 
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <span id="errorMessage">Oops! Nothing to show here!</span>
        )
    }
} */

class Ciudad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ciudad: {}
        }
    }

    componentDidMount() {
        const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
        const id = this.props.match.params.ciudadId;
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
            .then(r => r.json())
            .then((recurso) => {
                this.setState({
                    ciudad: recurso
                })
            })
    }

    render() {
        const city = this.state.ciudad;
        if (!city.main) return <img src={`https://i.pinimg.com/originals/43/3b/6c/433b6c5336c72a21bcfd9db8d831562a.gif`}></img>
        return (
                <div className="ciudad">
                    <div className="container">
                        <h2 id="cityName">{city.name}</h2>
                        <div className="info">
                            <div><span className="infoTitle">Temperature 🌡️</span> {city.main.temp} ºC</div>
                            <div><span className="infoTitle">Weather ☀️</span> {city.weather[0].main}</div>
                            <div><span className="infoTitle">Wind 💨</span> {city.wind.speed} km/h</div>
                            <div><span className="infoTitle">Cloud quantity ☁️</span> {city.clouds.all}</div>
                            <div><span className="infoTitle">Latitude 🌐</span> {city.coord.lat}º</div>
                            <div><span className="infoTitle">Longitude 🧭</span> {city.coord.lon}º</div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Ciudad;