import React, { Component } from 'react';


class FetchForm extends Component {

  state = {
    value: '99'
  }

  submit = (e) => {

  }

  change = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="number" value={this.state.value}
               onChange={this.change} />
        <input type="submit" value="Fetch Data"/>
      </form>
    );
  }
}

export default FetchForm;
