import React, { useEffect, useState } from 'react';
import SiteLogo from './SiteLogo';
import Menu from './Menu';
import styled from 'styled-components';
import Navigation from 'react-sticky-nav';

function Header() {
  function logit() {
    if (window.innerHeight + 500 <= window.pageYOffset) {
      document
        .querySelector('#header')
        .classList.add('animationHeightChangerSmall');
      document
        .querySelector('#header')
        .classList.remove('animationHeightChangerBig');
    } else {
      document
        .querySelector('#header')
        .classList.add('animationHeightChangerBig');
      document
        .querySelector('#header')
        .classList.remove('animationHeightChangerSmall');
    }
    // console.log("wH:", window.innerHeight)
    // console.log(window.pageYOffset);
  }

  // useEffect(() => {
  //     function watchScroll() {
  //         window.addEventListener("scroll", logit);
  //     }
  //     watchScroll();
  //     return () => {
  //         window.removeEventListener("scroll", logit);
  //     };
  //
  // }, []);

  const Header = styled(Navigation)`
    background-color: #c1292e;
    position: -webkit-sticky;
    display: flex;
    align-items: center;
    height: 100px;
    opacity: 0.8;
  `;

  const Responsive = styled.nav`
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 1900px;
    width: 100%;
    @media (max-width: 1800px) {
      //font-size: 2em;
    }
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  `;

  return (
    <Header id={'header'}>
      <Responsive id="responsive">
        <SiteLogo />
        <Menu />
      </Responsive>
    </Header>
  );
}

export default Header;
