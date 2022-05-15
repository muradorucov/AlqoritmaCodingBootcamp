import React from "react";

import Address from "./Address";
import Email from "./Email";
import Name from "./Name";
import PersonalfInfo from "./PersonalInfo";
export default class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Name name={this.props.name} />
        <PersonalfInfo info={this.props.info} />
        <Email email={this.props.email} />
        <Address address={this.props.address} />
      </div>
    );
  }
}
