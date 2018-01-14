import React, { Component } from 'react';
import './probe.scss';

export class Probe extends Component {
  render() {
    return (
      <div className="probe">
        <header className="probe-header">
          <h1 className="probe-title">Thsi is simple component</h1>
        </header>
        <p className="probe-intro">
          So u can delete it or just edit it
        </p>
      </div>
    );
  }
}
