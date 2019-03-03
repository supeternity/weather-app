import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

import Logo from './components/ui/Logo';

import Request from './components/pages/Request';
import Weather from './components/pages/Weather';
import Settings from './components/pages/Settings';

import { connect } from 'react-redux';
import { toggleSettingsShow } from './actions/settings';


import applyTheme from './themes';
import tit from './resources/ptic-sinic.svg';
import gear from './resources/settings.svg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400');
  html {
    margin: 0;
    padding: 0;
    background-color: ${p => p.theme.backgroundColor};
    font-family: '${p => p.theme.fontFamily}', sans-serif;
    font-size: ${p => p.theme.fontSize};
    color: ${p => p.theme.elementColor};
  }
  body {
    margin: 0;
  }
`;
const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  margin: 0 auto;
  padding: 10vh 4.25vw;
  padding-bottom: 0;
  box-sizing: border-box;
  overflow: hidden;
`;
const TitBird = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${tit}) no-repeat right 7vw bottom;
  background-size: 99vh;
`;
const Header = styled.div`
  position: relative;
  width: 100%;
`;
const ShowSettings = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
  width: 2.3vw;
  min-width: 24px;
  height: 2.3vw;
  min-height: 24px;
  background: url(${gear}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  z-index: 1;
`;
const Content = styled.div`
  width: 100%;
`;

const TitFly = posed.div({
  show: {
    position: 'absolute', top: 0,
    left: 0,
    opacity: 1,
    zIndex: -1,
    transition: {
      left: { ease: 'easeOut', duration: 500 },
      opacity: { ease: 'easeOut', duration: 500 }
    }
  },
  hide: {
    position: 'absolute',
    left: 50,
    opacity: 0,
    zIndex: -1,
    transition: {
      left: { ease: 'easeOut', duration: 500 },
      opacity: { ease: 'easeOut', duration: 500 }
    }
  }
});
const SettingsDepart = posed.div({
  show: {
    position: 'absolute', top: 0, zIndex: 999,
    right: 0 + '%',
    transition: {
      right: { ease: 'easeOut', duration: 900 }
    }
  },
  hide: {
    position: 'absolute', top: 0, zIndex: 999,
    right: -100 + '%',
    transition: {
      right: { ease: 'easeOut', duration: 900 }
    }
  }
});
const PageFading = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

export class Root extends React.Component {
  render () {
    return (
      <Router basename={process.env.REACT_APP_PUBLIC_URL}>
        <Route
          render = {({ location }) => (
            <ThemeProvider theme={applyTheme(this.props.settings.theme)}>
              <AppContainer>
                <GlobalStyle />
                <TitFly pose={location.pathname === '/' ? 'show' : 'hide'}>
                  <TitBird />
                </TitFly>
                <SettingsDepart pose={this.props.settings.show ? 'show' : 'hide'}>
                  <Settings />
                </SettingsDepart>
                <Header>
                  <Logo theme={this.props.settings.theme} />
                  <ShowSettings onClick={() => {this.props.toggleSettingsShow(this.props.settings.show)}} />
                </Header>
                <Content>
                  <PoseGroup>
                    <PageFading key={`page-${location.pathname}`}>
                      <Switch location={location}>
                        <Route exact path="/" component={Request} key="request" />
                        <Route path="/weather" component={Weather} key="weather" />
                      </Switch>
                    </PageFading>
                  </PoseGroup>
                </Content>
              </AppContainer>
            </ThemeProvider>
          )}
        />
      </Router>
    )
  }
}


const mapStateToProps = store => ({
  settings: store.settings,
});
const mapDispatchToProps = dispatch => ({
  toggleSettingsShow: value => dispatch(toggleSettingsShow(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
