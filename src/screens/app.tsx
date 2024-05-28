import image from '@/assets/images/react-1.webp';

import classes from './app.module.scss';

export const App = () => {
  return (
    <div className={classes.app}>
      <h1>Hello World</h1>
      <img src={image} alt="react" />
    </div>
  );
};
