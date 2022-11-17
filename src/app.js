class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);

    this.state = {
      options: props.options,
    };
  }
  handleRemoveAll() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handleRemoveOption(optionTest) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option)=>{
          return optionTest !== option;
        })
      };
    })
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
    const subTitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOption} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      {props.options.map((option) => (
        <Option
          key={option}
          option={option}
          handleRemoveOption={props.handleRemoveOption}
        />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <p>{props.option}</p>
      <button onClick={(e) => {
        props.handleRemoveOption(props.option)
      }}>Remove</button>
    </div>
  );
};

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

ReactDOM.render(
  <IndecisionApp options={["option 1", "option 2"]} />,
  document.getElementById("app")
);
