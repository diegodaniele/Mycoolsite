import React from 'react';

import classes from './Terminal.scss';
import Window from '../../../../../components/Window/Window';

export default function Terminal() {
  const p1 = `
  I'm a Full-Stack Developer currently working for NTT Data in Turin. I focus on designing and developing quality apps with Java, Angular,JavaScript, HTML, and CSS. I love web design/develop and UX design , when i have free time i spent a lot on study latest web design tech and create cool things!
  `; 
  const p2 = `
  I focus on creating high performance, well engineered, and elegant applications as a
  full stack developer. I'm working on back-end and front-end application with all my passion , i hope that i'm gonna improve myself everyday!
  `; 
  return (
    <Window title={'diego@10.0.1.52: bash'}>
      <div className={classes.terminalArea}>
        <div className={classes.command}>$ cd /home/diego/</div>
        <div className={classes.command}>$ cat README.txt</div>
        <div className={classes.response}>
          {p1}
          <br />
          <br />
          {p2}
        </div>
        <div>
          <br />
        </div>
        <div className={classes.command}>$ ls skills/</div>
        <div className={classes.response}>
          <span>React</span>
          <span>Flutter</span>
          <span>Spring</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>Adobe XD</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <div>
          <br />
        </div>
        <div className={classes.command}>$ exit</div>
      </div>
    </Window>
  );
}
