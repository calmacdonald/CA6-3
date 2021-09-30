class WeatherStation extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {latitude: this.props.latitude,
                    longitude: this.props.longitude
                   };
    }
    
    toggleUnits = () => {
        //TO DO: Toggle temperature between degrees F and degrees C
    }

    render() {
      return(
      <div>
         <h2>Weather Conditions</h2>
         <h6><i>Last updated: {this.state.retrieved}</i></h6>
            <h5>Conditions: </h5>
            <h5>Visibility: </h5>
            <h5>Temperature: </h5>
            <h5>Humidity: </h5>
            <h5>Wind Speed:</h5>
            <h5>Wind Direction: </h5>
            <div className="custom-control custom-switch">
            <input type="checkbox" 
              className="custom-control-input" 
              id="customSwitches" onClick={this.toggleUnits} />
              <label className="custom-control-label" 
                htmlFor="customSwitches">&nbsp;&deg;units</label>
            </div>
         </div>
        );
    }
}

ReactDOM.render(
    <WeatherStation />,
    document.getElementById('root')
);