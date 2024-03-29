import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Pages 
import Home from './views/Home';
import Friends from './components/sections/Friends';
import Posts from './components/sections/Posts';
import Messages from './components/sections/messages';
import Profile from './components/sections/Profile';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => ( 
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault} />
          <AppRoute exact path="/friends" component={Friends} layout={LayoutDefault} />
          <AppRoute exact path="/posts" component={Posts} layout={LayoutDefault} />
          <AppRoute exact path="/messages" component={Messages} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;