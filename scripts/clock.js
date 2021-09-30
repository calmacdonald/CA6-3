class FormattedTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: props.date};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.date != prevState.date) {
      return {date: nextProps.date};
    }  else {
      return null;
    }
  }

  render() {
    return this.state.date.toLocaleTimeString();
  }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    updateTime() {
        this.setState({
          date: new Date()
        });
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
          <h2>It is <FormattedTime date={this.state.date} />. </h2>
        </div>
      );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);