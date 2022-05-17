import React, { Component } from 'react'

export default class ClientInfo extends Component {
  render() {
      const {ClientData} =this.props
      if (ClientData === null) {
        return null;
      }
    return (
      <div>
        <div>Client name is {ClientData.name}</div>
        <div>Client phone is {ClientData.phone}</div>
        <div>Client birthday is {ClientData.birthday}</div>
      </div>
    )
  }
}

