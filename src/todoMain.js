import React, { Component } from "react";
class TodoBody extends Component {
  render() {
    return (
      <section id="main">
        <div className="search">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search" aria-hidden="true" />
        </div>
        <div className="Inbox">
          <a href="google.com">
            <span>
              <i className="fa fa-inbox" aria-hidden="true" />
            </span>
            <span className="Inbox-text">Inbox</span>
            <span>5</span>
          </a>
        </div>
        <div className="Assigned">
          <a href="google.com">
            <span>
              <i className="fa fa-user" aria-hidden="true" />
            </span>
            <span className="Assigned-text">Assigned to me</span>
            <span>1</span>
          </a>
        </div>
        <div className="Starred">
          <a href="google.com">
            <span>
              <i className="fa fa-star" aria-hidden="true" />
            </span>
            <span className="Starred-text">Starred</span>
            <span>3</span>
          </a>
        </div>
        <div className="Today">
          <a href="google.com">
            <span>
              <i className="fa fa-calendar" aria-hidden="true" />
            </span>
            <span className="Today-text">Today</span>
            <span>13</span>
          </a>
        </div>
        <div className="Work">
          <a href="google.com">
            <span>
              <i className="fa fa-briefcase" aria-hidden="true" />
            </span>
            <span className="Work-text">Work</span>
            <span>5</span>
          </a>
        </div>
        <div className="Purchases">
          <a href="google.com">
            <span>
              <i className="fa fa-credit-card-alt" aria-hidden="true" />
            </span>
            <span className="Purchases-text">Purchases</span>
            <span>24</span>
          </a>
        </div>
        <div className="Films">
          <a href="google.com">
            <span>
              <i className="fa fa-film" aria-hidden="true" />
            </span>
            <span className="Films-text">Films</span>
            <span>7</span>
          </a>
        </div>
      </section>
    );
  }
}

export default TodoBody;
