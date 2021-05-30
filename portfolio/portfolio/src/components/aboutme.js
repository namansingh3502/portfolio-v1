import React from 'react';
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image";

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
const TextBox = styled.div`
  color:white;
  text-align: center;
  font-size: 1.5em;
  line-height: 1.6em;
  p{
    padding: 10px;
  }
`

const Profile = () => {
    return (
        <section id="AboutMe">
            <Heading>
                <p>About Me</p>
            </Heading>
            <div className="grid grid-cols-5 gap-4 " style={{paddingTop:10}}>
                <StaticImage
                    className="col-start-1 col-span-2 place-self-center"
                    src="../images/clipart.png"
                    alt="MyProfile photo"
                />
                <TextBox className="col-start-3 col-span-3 place-self-center font-serif ">
                    <p>I'm Naman Singh, and as you might have already read. </p>

                    <p>I am a sophomore from Bangalore pursuing my Bachelor's in Computer Science and Engineering.</p>

                    <p>This website was made to showcase all of what I can do and plan to do. Don't judge my writing based on this section though, I am still working on it.</p>

                    <p>I got into development because computers have always fascinated me. Seeing code getting converted to things to do complex tasks like games, applications, was no less than magic to me and that's where my quest of learning and building began.</p>

                    <p>I created this website so I could showcase all this and through this process, make it easier for you to connect with me. If you like what you see, head over to the contact section below and send me a text. I would love to hear from you.</p>
                </TextBox>

            </div>

        </section>
    )
};

export default Profile;