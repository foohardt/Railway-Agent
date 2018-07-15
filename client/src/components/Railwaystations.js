import React, { Component } from 'react';
import api from '../api';
import { Link, Route } from 'react-router-dom';
import RailwaystationDetail from './RailwaystationDetail';

class Railwaystations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      railwaystations: []
    }
  }
  componentDidMount() {
    api.getRailwaystations()
      .then(railwaystations => {
        console.log(railwaystations)
        this.setState({
          railwaystations: railwaystations
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="Railwaystations">
        <h2>List of Railwaystations</h2>
        <ul>
          {this.state.railwaystations.map((e) =>
            <li key={e._id}><Link to={"/stations/" + e._id}>{e.name}</Link></li>)}
        </ul>
        {/* <Route path="/stations/:id" component={RailwaystationDetail}/> */}
      </div>
    );
  }
}

export default Railwaystations;
