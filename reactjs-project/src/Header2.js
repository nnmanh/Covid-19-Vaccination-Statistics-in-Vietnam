import React from 'react';
import { useEffect } from 'react';
import {
  HeaderContainer2,
  HeaderContent,
  HeaderItems,
  HeaderH1,
  HeaderP,
} from './HeaderStyle';
import Aos from 'aos';
import Count from './Count';

const Header2 = () => {
  useEffect(() => {
    Aos.init({duration: 3000})
  })
  return (
    <HeaderContainer2 >
      <HeaderContent data-aos = "fade-right">
        <HeaderItems>
          <HeaderH1> More Than 1,000,000 Cases Reported</HeaderH1>
          <HeaderP> Statistics for 63 provinces</HeaderP>
        </HeaderItems>
      </HeaderContent>
    </HeaderContainer2>
  );
};

export default Header2;