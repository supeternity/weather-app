import React from 'react';
import styled from 'styled-components';

import Switcher from '../ui/Switcher';

import { connect } from 'react-redux';
import { toggleSettingsShow, toggleTheme } from '../../actions/settings';


const Page = styled.div`
  width: 38vw;
  height: 100vh;
  padding: 10.8vh 4.25vw;
  padding-bottom: 0;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${p => p.theme.backgroundColor};
`;
const Header = styled.div`
  position: relative;
  margin-bottom: 4vh;
  font-family: '${p => p.theme.fontFamilySecond}', sans-serif;
  font-weight: 300;
  font-size: ${p => p.theme.fontSizeH1};
`;
const Close = styled.div`
  position: absolute;
  top: -16px;
  right: 0;
  width: 2.3vw;
  min-width: 24px;
  height: 2.3vw;
  min-height: 24px;
  font-family: '${p => p.theme.fontFamily}', sans-serif;
  font-size: ${p => p.theme.fontSizeH1};
  cursor: pointer;
`;
const Item = styled.div`
  position: relative;
  line-height: 7vh;
  color: ${p => p.unactive ? p.theme.elementColorSecond : p.theme.elementColor };
  white-space: nowrap;
`;
const Name = styled.span`
  width: 50%;
  vertical-align: middle;
`;
const Value = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-weight: 500;
`;
const Disclamer = styled.div`
  position: absolute;
  right: 4.25vw;
  bottom: 10.8vh;
  font-family: '${p => p.theme.fontFamilySecond}', sans-serif;
  font-size: ${p => p.theme.fontSizeMicro};
  text-align: right;
  color: ${p => p.theme.elementColorSecond};
`;

export class Settings extends React.Component {
  render () {
    return (
      <Page>
        <Header>
          Настройки
          <Close onClick={() => {this.props.toggleSettingsShow(this.props.settings.show)}}>
            ×</Close>
        </Header>
        <Item>
          <Name>Ночная тема</Name>
          <Value onClick={() => {this.props.toggleTheme(this.props.settings.theme)}}>
            <Switcher trigger={this.props.settings.theme} />
          </Value>
        </Item>
        <Item unactive>
          <Name>Источник данных</Name>
          <Value>
            MetaWeather.com
          </Value>
        </Item>
        <Item unactive>
          <Name>Язык и система мер</Name>
          <Value>
            Русский / C°
          </Value>
        </Item>
        <Disclamer>
          Dmitry Raykov for <span style={{color: 'red'}}>Y</span>andex, test task<br />
          2019 All Rights reserved
        </Disclamer>
      </Page>
    )
  }
}


const mapStateToProps = store => ({
  settings: store.settings,
});
const mapDispatchToProps = dispatch => ({
    toggleSettingsShow: value => dispatch(toggleSettingsShow(value)),
    toggleTheme: value => dispatch(toggleTheme(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
