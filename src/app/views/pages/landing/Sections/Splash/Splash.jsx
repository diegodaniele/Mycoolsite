
import React, { Component } from 'react';

import classes from './Splash.scss';
import Settings from '../../../../../settings';
import Button from '../../../../components/Button/Button';

export default class Splash extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.identityContainerRef = React.createRef();
  }

  render() {
    return (
      <section className={classes.splash} ref={this.ref}>
        <div className={classes.identityContainer} ref={this.identityContainerRef}>
          <h3>Hi, my name is</h3>
          <h1>Diego Daniele</h1>
          <h2>I create powerful and superCool apps!</h2>

          <p dangerouslySetInnerHTML={{ __html: Settings.biography }} />

          <br />
          <br />

          <div className={classes.actionButtons}>
            <Button href={'mailto:diegodaniele2@gmail.com'}>Get in touch</Button>
            <Button href={'https://drive.google.com/open?id=1s4XvZJLdsGWHAZKMjf-lkfYHXhRONMXC'}>CV</Button>
          </div>
        </div>
      </section>
    );
  }
}
