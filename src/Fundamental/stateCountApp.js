class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddone = this.handleAddone.bind(this);
        this.handleMinusone = this.handleMinusone.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }
    handleAddone() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusone() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count }</h1>
                <button onClick={this.handleAddone}>+1</button>
                <button onClick={this.handleMinusone}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
} 

ReactDOM.render(<Counter />, document.getElementById("app"));