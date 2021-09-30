/*************************************************************************
 * File: Clock.js
 * This file defines the various clock and date components developed 
 * in Chapter 10.
 ************************************************************************/

/*************************************************************************
 * @class FormattedDate 
 * @Desc 
 * This React component renders the current date.
 *************************************************************************/
class FormattedDate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.date.toLocaleDateString();
  }
}

/*************************************************************************
 * @class FormattedTime 
 * @Desc 
 * This React component renders the current time.
 *************************************************************************/
class FormattedTime extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.date.toLocaleTimeString();
  }
}

/*************************************************************************
 * @class Clock 
 * @Desc 
 * This React component represents a digital clock that displays the 
 * current time and date.
 *************************************************************************/
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new Date(),
          displayDate: false};
    }

    updateTime() {
        this.setState({
          date: new Date()
        });
    }

    buttonClick = () => {
        this.setState({displayDate: !this.state.displayDate});
    }
      

    componentDidMount() {
        this.timer = setInterval(
          () => this.updateTime(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
      return (
        <div>
          <h1>Hello React Students!</h1>
          {this.state.displayDate ?
            <h2>The date is <FormattedDate date={this.state.date} />.</h2>
            : null}
          <h2>The time is <FormattedTime date={this.state.date} />.</h2>
          <button className="btn btn-primary" onClick={this.buttonClick}>
              {this.state.displayDate ? "Hide Date" : "Show Date"}
          </button>
        </div>
      );
    }
  }


ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);