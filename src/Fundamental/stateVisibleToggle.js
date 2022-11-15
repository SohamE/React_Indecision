class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
        visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Info" : "Show Info"}
        </button>
        {this.state.visibility && <VisibleContent />}
      </div>
    );
  }
}

class VisibleContent extends React.Component {
  render() {
    return <p>I am visible</p>;
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
