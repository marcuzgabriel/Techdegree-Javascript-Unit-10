import React from 'react';
import { renderRoutes } from "react-router-config";
import styled from 'styled-components';
import {Switch} from "react-router-dom";
import Header from './components/pages/header/Header';

const PageWrap = styled.div`
    width: 100%;
    position: absolute;
    top: 0px; left: 0px; right: 0px; bottom: 0px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    * {
      box-sizing: border-box;
    }
`;

const App = ({route}) => {

    return (
        <PageWrap>
              <Header />
              <Switch>
                  {renderRoutes(route.routes)}
              </Switch>
        </PageWrap>
  
    );
};
export default {
    component: App
}

