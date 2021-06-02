import React from 'react';
import styled from "styled-components";

const Heading = styled.div`
  justify-content: center;
  font-size: 3.5em;
  padding-bottom: 20px;
 
  p {
    text-align: center;
    padding: 15px;
    color: rgb(86, 25, 255);
    font-weight: 800;
    margin: 0 10px;
    position: relative;
  }
  p, p:after, p:before {
    transition: all .8s;
  }
  p:hover {
    color: rgb(0, 0, 0);
  }
  p:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0;
    content: ".";
    color: transparent;
    background: #aaa;
    height: 1px;
  }
  p:hover:after {
    width: 80%;
  }
`

const Skills = () => {

    return(
        <section id="Skills">
            <Heading>
                <p>Skills</p>
            </Heading>
        </section>
        


    )
}

export default Skills;