import React, { Component } from "react";
class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      todoType: "",
      todoDate: ""
    };
    this.formDetails = this.formDetails.bind(this);
    // this.formRef = null;
  }
  render() {
    return (
      <div id="Todo">
        <div className="form">
          <div className="formHeader">
            <span>
              <i
                className="fa fa-arrow-left"
                onClick={this.closeForm}
                aria-hidden="true"
              />
            </span>
            <span className="addnew">Add new Todo</span>
            <span>
              <i className="fa fa-sliders" aria-hidden="true" />
            </span>
          </div>
          <div className="formLogo">
            <i className="fa fa-pencil" aria-hidden="true" />
          </div>
          <form onSubmit={this.formDetails} ref={ref => (this.formRef = ref)}>
            <div>
              <input type="text" />
              <i className="fa fa-caret-down" aria-hidden="true" />
            </div>
            <div>
              <select>
                <option
                  value=""
                  disabled={this.props.defaultDisabled ? true : null}
                >
                  Type of todo
                </option>
                <option value="Work">Work</option>
                <option value="Purchase">Purchase</option>
                <option value="Film">Film</option>
              </select>
            </div>
            <div>
              <input type="date" />
            </div>
            <div>
              <button>ADD YOUR TODO</button>
            </div>
          </form>
        </div>
        <div onClick={this.displayForm} className="add">
          <i className="fa fa-plus" aria-hidden="true" />
        </div>
        <div>
          <h1>{this.state.todo}</h1>{" "}
        </div>
        <div>
          <h1>{this.state.todoType}</h1>{" "}
        </div>
        <div>
          <h1>{this.state.todoDate}</h1>{" "}
        </div>
      </div>
    );
  }

  displayForm() {
    const formdis = document.querySelector(".form");
    formdis.style.display = "block";
  }
  closeForm() {
    const formdis = document.querySelector(".form");
    formdis.style.display = "none";
  }
  formDetails(e) {
    e.preventDefault();
    this.setState({
      todo: e.target[0].value,
      todoType: e.target[1].value,
      todoDate: e.target[2].value
    });

    this.formRef.reset();
    const formdis = document.querySelector(".form");
    formdis.style.display = "none";
  }
}

export default Todo;
