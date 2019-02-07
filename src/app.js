import React from "react";
import { connect } from "react-redux";

import app from "./app.module.scss";
import * as utils from "./lib/utils.js";
import * as actions from "./store/actions.js";

class App extends React.Component {
  fetchPeople = e => {
    e.preventDefault();
    this.props.getApiData();
  };

  fetchPerson = async url => {
    const person = await utils.get(url);
    this.props.selectPerson({ person });
  };

  render() {
    const { people, person } = this.props;
    return (
      <>
        <a href="#" onClick={this.fetchPeople}>
          Get The People
        </a>
        <section className={app.people}>
          <ul>
            {people.map((result, i) => (
              <li onClick={() => this.fetchPerson(result.url)} key={i}>
                {result.name}
              </li>
            ))}
          </ul>
          <div className={app.person}>
            {Object.keys(person).map((key, i) => (
              <div key={i}>
                <span>{key}:</span>
                <span>{person[key]}</span>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.people.people,
    person: state.people.person
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  selectPerson: person => dispatch(actions.selectPerson(person)),
  getApiData: () => dispatch(actions.getApiData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
