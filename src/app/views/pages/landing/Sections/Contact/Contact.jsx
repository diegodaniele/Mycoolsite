import React from 'react';

import classes from './Contact.scss';
import Title from '../../../../components/Title/Title';

export default function Contact() {
  const p1 = `
  I am currently interested in any freelance work offers about Web Design/UX Design.  Feel free to drop me
  a line if you'd like to discuss anything about it!
  `; 
  const p2 = `
  I hope we'll work togheter to create superCool things!
  `; 

  return (
    <section className={classes.contact} id={'contact'}>
      <Title title={'📨 Get in touch with me.'} alignRight />

      <div className={classes.contactDetails}>
        <p>
          {p1}
          <br />
          <br />
          {p2}
        </p>

        <a href={'mailto:diegodaniele2@gmail.com'}>
          <button>Say hello!</button>
        </a>
      </div>
    </section>
  );
}
