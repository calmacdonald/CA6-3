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
          <h1>Hello CptS 489 Students!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);