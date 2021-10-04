class WeatherObs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {station: null};
      }

    getLocSuccess = (position) =>  {
        //Set geolocatio to user's current position
        this.setState({station: {lat: position.coords.latitude, 
                        long: position.coords.longitude}});
    }

    getLocError = (err) => {
        //Set geolocation to Seattle if user refuses to share loc
        this.setState({station: {lat: 47.61, long: -122.33}});
    }

    addStation = async() => {
        const newStation = prompt("Enter a City, State, and Country:");
        if (newStation != null) { //Need to see if we can find the station through the API 
          const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' +
              newStation +  '&appid=98cb8d2538da248784d8e1c1f9332ea9');
          const stationData = await response.json();
          //See if the requested station exists
          if (stationData != null && stationData.hasOwnProperty('coord')) { 
              //TO DO: Add station to list
          } else { 
              alert("Sorry, that weather location could not be found.");
          }
       }
    }
    
    componentDidMount = () => {
        //Initialize based on user's current location, if possible
        navigator.geolocation.getCurrentPosition(this.getLocSuccess,this.getLocError);
    }

    render() {
        if (this.state.station != null) {
           return (<main>
                    <WeatherStation latitude={this.state.station.lat} 
                                    longitude={this.state.station.long} />
                    <button className="float" id="addStationBtn" onClick={this.addStation}>
                        <span className="float-btn-icon fa fa-plus" id="floatBtnIcon"></span>
                    </button>
                  </main> );
        } else {
            return null;
        }
    }
}


ReactDOM.render(
    <WeatherObs/>,
    document.getElementById('root')
);