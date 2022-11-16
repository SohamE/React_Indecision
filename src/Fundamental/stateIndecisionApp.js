class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
  
      this.state = {
        options: [],
      };
    }
    handleRemoveAll() {
      this.setState(() => {
        return {
          options: [],
        };
      });
    }
    handlePick() {
      const randNumber = Math.round(Math.random() * this.state.options.length);
      const option = this.state.options[randNumber];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }
      this.setState((prevState) => {
        return {
          options: prevState.options.concat([option]),
        };
      });
    }
    render() {
      const title = "Indecision";
      const subTitle = "Put your life in the hands of a computer";
  
      return (
        <div>
          <Header title={title} subTitle={subTitle} />
          <Action
            hasOption={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleRemoveAll={this.handleRemoveAll}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subTitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
    render() {
      return (
        <div>
          <button
            disabled={!this.props.hasOption}
            onClick={this.props.handlePick}
          >
            What should I do?
          </button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    render() {
      // console.log(this);
      return (
        <div>
          <button onClick={this.props.handleRemoveAll}>Remove All</button>
          {this.props.options.map((option) => (
            <Option key={option} option={option} />
          ))}
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      return <p>{this.props.option}</p>;
    }
  }
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined,
      };
    }
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.option.value.trim();
      const error = this.props.handleAddOption(option);
  
      this.setState(() => {
        return {
          error,
        };
      });
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <input type="Submit" />
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
  