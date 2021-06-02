import React from 'react';
import styled from "styled-components";
import {StaticImage} from "gatsby-plugin-image";
import 'devicon'

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
const BackpackItem = styled.div`
  
  li{
    font-family: sans-serif;
    height: auto;
    padding-top: 2%;
    padding-bottom: 2%;
    place-items: center;
    object-fit: contain;
  }
  i{
    font-size: 400%;
    line-height: 1;
    margin-right: 20px;
  }

  h1{
    font-size: 1.4em;
    color:rgb(46,196,182);
    font-weight: bold;
  }
  h3{
    color:rgb(46,196,182);
    font-weight: bold;
  }
`

const Backpack = () => {
    return(
        <section id="Backpack" className="xl:px-0">
            <Heading className="pb-4 mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-6xl justify-center self-center font-serif">
                <h1
                    style={{
                        color:"rgb(46,196,182)",
                    }}
                >My Development Backpack</h1>
            </Heading>
            <div className="grid">
                <StaticImage
                    className="object-contain justify-self-center h-48 w-48 my-6"
                    src="../images/backpack.png"
                    alt="MyProfile photo"
                />
            </div>
            <BackpackItem className="grid grid-cols-3 lg:ml-10 xl:ml-0 px-6 lg:px-4 mt-4 lg:mt-10"
                    style={{
                        color:"white",
                        fontFamily:"Sriracha"
                    }}>
                <div className="col-start-1 col-span-3 xl:col-span-1 px-3 sm:ml-3 md:ml-0 md:pl-0">
                    <h3 className="self-center text-center text-4xl mb-8 mt-4 ">Languages</h3>
                    <ul>
                        <li>
                            <div className="inline-flex">
                                <div><i className="devicon-cplusplus-plain colored"/></div>
                                <div>
                                    <h1 className="block">C++</h1>
                                    <p>My go to programming language for competitive programming. </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inline-flex">
                                <i className="devicon-python-plain colored"/>
                                <div>
                                    <div>
                                        <h1 className="block">Python</h1>
                                        <p>I also like playing with Python for side projects and keen to use this knowledge to learn ML and AI.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inline-flex">
                                <i className="devicon-javascript-plain colored"/>
                                <div>
                                    <div>
                                        <h1 className="block">Javascript</h1>
                                        <p>Mainly for adding functionality to front-end and ReactJs.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inline-flex">
                                <i className="devicon-html5-plain-wordmark colored"/>
                                <div>
                                    <div>
                                        <h1 className="block">HTML5</h1>
                                        <p>Mostly writing HTML in JSX, but from time to time I find myself writing a plain, classic HTML file.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inline-flex">

                                <i className="devicon-css3-plain-wordmark colored"/>
                                <div>
                                    <div>
                                        <h1 className="block">CSS</h1>
                                        <p>Styling of html elements; I usually go for styled-components or Sass or Less.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-start-1 col-span-3 xl:col-start-2 xl:col-span-1 ">
                    <h3 className="self-center text-center text-4xl mb-8 mt-4">Libraries & Frameworks</h3>
                    <ul>
                        <li>
                            <div className="inline-flex">
                                <i className="devicon-django-plain"/>
                                <div>
                                    <h1 className="block">Django</h1>
                                    <p>My go to framework of Python when it comes in building any back-end project.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inline-flex">
                                <i className="devicon-react-original colored"/>
                                <div>
                                    <h1 className="block">React</h1>
                                    <p>My favourite library for building web front-ends and single page apps.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inline-flex">
                                <i className="devicon-gatsby-plain colored"/>
                                <div>
                                    <h1 className="block">GatsbyJS</h1>
                                    <p>Great framework for building blazing fast websites. By the way, this website is using Gatsby under the hood!</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inline-flex">
                                <i className="devicon-graphql-plain colored"/>
                                <div>
                                    <h1>GraphQl</h1>
                                    <p>Learning and implementing GraphQL API's for query processing with Apollo Server and Express.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inline-flex ">
                                <StaticImage
                                    className="flex flex-row object-contain w-16 h-16 mr-4 xl:mr-5 pr-4"
                                    src="../images/tailwind.png"
                                    alt="django icon"
                                />
                                <div>
                                    <h1 className="block">TailwindCSS</h1>
                                    <p>Styling of html elements</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-start-1 col-span-3 xl:col-starts-3 xl:col-span-1 xl:px-8">
                    <h3 className="self-center text-center text-4xl mb-8 mt-4">Tools & Others</h3>
                    <ul>
                        <li>
                            <div className="inline-flex">
                                <i className="devicon-github-original"/>
                                <div>
                                    <h1 className="block">Github</h1>
                                    <p>Place where you can find my OSS projects.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inline-flex">
                                <i className="devicon-ubuntu-plain colored"/>
                                <div>
                                    <h1 className="block">Ubuntu</h1>
                                    <p>My favourite Operating System.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </BackpackItem>
        </section>
    )
}

export default Backpack;