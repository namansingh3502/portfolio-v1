import React from 'react';
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image";

const Heading = styled.div`
  h1 {
    text-align: center;
    padding: 15px;
    color: rgb(86, 25, 255);
    font-weight: 800;
    margin: 0 10px;
    position: relative;
  }
  h1, h1:after, h1:before {
    transition: all .8s;
  }
  h1:hover {
    color: rgb(0, 0, 0);
  }
  h1:after {
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
  h1:hover:after {
    width: 100%
  }
`
const Profile = () => {
    return (
        <section id="AboutMe">
            <Heading className="pb-4 mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-6xl self-center font-serif">
                <h1
                    style={{
                    color:"rgb(46,196,182)",
                    margin: 15
                }}
                >   Short Introduction</h1>
            </Heading>
            <div className="grid grid-cols-6 gap-10 mt-2 lg:mt-0 px-6 lg:px-4">
                <div className="hidden lg:block lg:col-start-1 lg:col-span-2 place-self-center place-items-end ">
                    <StaticImage
                        className="flex flex-row object-contain  m-4"
                        src="../images/clipart.png"
                        alt="MyProfile photo"
                    />
                </div>

                <div className="col-start-1 col-span-6 lg:col-start-3 lg:col-span-4 xl:px-6 md:text-xl lg:text-xl xl:text-2xl text-center place-self-center font-serif xl:my-16"
                    style={{
                        color:"white"
                    }}>
                    <p className="p-2 md:mb-4">I'm <span  >Naman Singh</span>, and as you might have already read. </p>

                    <p className="p-2 md:mb-4">I am a sophomore from Bangalore pursuing my Bachelor's in Computer Science and Engineering.</p>

                    <p className="p-2 md:mb-4">This website was made to showcase all of what I can do and plan to do. Don't judge my writing based on this section though, I am still working on it.</p>

                    <p className="p-2 md:mb-4">I got into development because computers have always fascinated me. Seeing code getting converted to things to do complex tasks like games, applications, was no less than magic to me and that's where my quest of learning and building began.</p>

                    <p className="p-2 md:mb-4">I created this website so I could showcase all this and through this process, make it easier for you to connect with me. If you like what you see, head over to the contact section below and send me a text. I would love to hear from you.</p>
                </div>

            </div>

        </section>
    )
};

export default Profile;