import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faTools } from '@fortawesome/free-solid-svg-icons'

const Sidebars = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background-color: #414141;
`;

const NavItems = styled.div`
  position: relative;
  border-color: black;
  border-width: 1px;

  i {
    width: 50px;
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #414141;
    transition: all 0.3s;
  }
  span {
    position: absolute;
    background-color: #414141;
    height: 100%;
    padding-right: 20px;
    padding-left: 20px;
    line-height: 50px;
    font-size: 1.3em;
    transform: translateX(-100%);
    transition: all 0.3s;
    z-index: -1;
  }
  :hover i {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }
  :hover span {
    transform: translateX(0);
  }
`;

const NavigationBar = () => {
    const home = <FontAwesomeIcon icon={faHome}/>
    const about = <FontAwesomeIcon icon={faUser}/>
    const skills = <FontAwesomeIcon icon={faTools}/>

    return (
        <Sidebars>
            <NavItems>
                <Link to="#Home">
                    <i> {home} </i>
                    <span> Home </span>
                </Link>
            </NavItems>
            <NavItems>
                <Link to="#AboutMe">
                    <i> {about} </i>
                    <span> About </span>
                </Link>
            </NavItems>
            <NavItems>
                <Link to="#Skills">
                    <i> {skills} </i>
                    <span> Skill </span>
                </Link>
            </NavItems>
        </Sidebars>
    )
};

export default NavigationBar;