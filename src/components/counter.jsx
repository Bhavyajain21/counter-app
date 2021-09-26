import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps', prevProps);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax Call and get new data from the server
    }
  }
  componentWillUnmount() {
    // console.log('unmouted component')
  }

  handleIncrement = product => {
    // console.log("product", product);

    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props in counter", this.props);
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getListOfTags() {
    const listOfTags = this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    return listOfTags;
  }

  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
