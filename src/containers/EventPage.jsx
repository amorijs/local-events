import React, { Component } from 'react';
import Event from '../components/Event.jsx';
import SearchForm from '../components/SerachForm.jsx';

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = { eventsData: [], filterOld: true };
  }

  componentWillMount() {
    this.getData();
  }

  getData = () =>
    fetch('http://localhost:3000/djlist')
      .then(response => response.json())
      .then(eventsData => this.setState({ eventsData }))
      .catch(e => console.log(e));

  handleSearch = event => {
    console.log(event);
  };

  handleSortAndFilterChange = event => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    if (name === 'order') return this.sortOrder(value);
    if (name === 'filter-old') this.setState({ filterOld: !this.state.filterOld });
  };

  sortOrder = value => {
    const { eventsData } = this.state;
    const newEventsData = [...eventsData];

    if (value === 'latest') newEventsData.sort((a, b) => new Date(a) - new Date(b));
    if (value === 'earliest') newEventsData.sort((a, b) => new Date(b) - new Date(a));

    this.setState({ eventsData: newEventsData });
  };

  render() {
    const events = this.state.eventsData.map((event, i) => {
      const isEarlier = (a, b) => new Date(a) < new Date(b);
      if (this.state.filterOld && isEarlier(event.date, Date.now())) return null;
      else return <Event key={`event ${i}`} {...event} />;
    });

    return (
      <div>
        <h1>Edm in your area!</h1>
        <SearchForm
          handleSubmit={this.handleSearch}
          handleChange={this.handleSortAndFilterChange}
        />
        <div className="all-events">{events}</div>
      </div>
    );
  }
}

export default EventPage;
