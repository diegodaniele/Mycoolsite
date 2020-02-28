import React from 'react';
import cx from 'classnames';

import classes from './SocialBars.scss';

export default function SocialBars() {
  return (
    <>
      <div className={cx(classes.bottomSocial, classes.left, classes.icons)}>
        <a href={'https://github.com/diegodaniele'} target={'_blank'}>
          <i className={'fab fa-github'} />
        </a>
        <a href={'https://www.instagram.com/danistrike_'} target={'_blank'}>
          <i className={'fab fa-instagram'} />
        </a>
        <a href={'https://twitter.com/Diego08072772'} target={'_blank'}>
          <i className={'fab fa-twitter'} />
        </a>
        <a href={'https://www.linkedin.com/in/diego-daniele-988a9618a/'} target={'_blank'}>
          <i className={'fab fa-linkedin'} />
        </a>
        <a href={'mailto:diegodaniele2@gmail.com'}>
          <i className={'fas fa-envelope'} />
        </a>
      </div>
      <div className={cx(classes.bottomSocial, classes.right, classes.text)}>
        <p>
          <a href={'mailto:diegodaniele2@gmail.com'}>diego-daniele.io</a>
        </p>
      </div>
    </>
  );
}
