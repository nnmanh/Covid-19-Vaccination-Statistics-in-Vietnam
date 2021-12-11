import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderH1,
  HeaderP,
} from './HeaderStyle';
import Count from './Count';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderItems>
          <HeaderH1>Covid-19 Vaccination Statistics in Vietnam</HeaderH1>
          <HeaderP>From August to November 2021</HeaderP>
          <Count/>
        </HeaderItems>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;