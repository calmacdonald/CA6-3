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

    componentDidMount = () => {
        //Initialize based on user's current location, if possible
        navigator.geolocation.getCurrentPosition(this.getLocSuccess,this.getLocError);
    }

    render() {
        if (this.state.station != null) {
           return (<div id="main">
                     <div align="center" className="jumbotron">
                       <WeatherStation latitude={this.state.station.lat} 
                                       longitude={this.state.station.long} />
                     </div>
                   </div> );
        } else {
            return null;
        }
    }
}


ReactDOM.render(
    <WeatherObs/>,
    document.getElementById('root')
);