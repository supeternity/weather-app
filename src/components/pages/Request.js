import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Page = styled.div`
  padding-top: 5.2vh;
`;

const button = {
  display: 'inline-block',
  marginTop: '6.2vh',
  padding: '1.42vh 3.35vw 1.46vh',
  backgroundColor: '#FCD836',
  textDecoration: 'none',
  borderRadius: '3px',
  color: '#000000',
  cursor: 'pointer',
}

const Request = () => (
  <Page>
    <Link style={button} to="/weather">
      Получить прогноз
    </Link>
  </Page>
)

export default Request;