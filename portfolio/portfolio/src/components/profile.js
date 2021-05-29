import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"


const AccountLink = styled.div`
  
`

const Profile = () => {
    const hand = "https://raw.githubusercontent.com/aemmadi/aemmadi/master/wave.gif";
    const github_icon = "https://img.shields.io/badge/-black?style=flat-square&logo=github&logoColor=white";
    const github_profile = "https://github.com/namansingh3502/";
    const linkedin_icon = "https://img.shields.io/badge/-blue?style=flat-square&logo=Linkedin&logoColor=white";
    const linkedin_profile = "https://www.linkedin.com/in/naman-singh-215b2119b/";
    const insta_icon = "https://img.shields.io/badge/-purple?style=flat-square&logo=instagram&logoColor=white";
    const insta_profile = "https://www.instagram.com/naman.singh_35/";
    const gmail_icon = "https://img.shields.io/badge/-c14438?style=flat-square&logo=Gmail&logoColor=white";
    const gmail_profile = "mailto:namansingh0305@gmail.com";


    return (
        <section className="h-screen flex flex-row-1 place-self-center">
            <div className="grid grid-cols-6 gap-10" style={{color:"white"}}>
                <StaticImage
                    className="col-start-2 col-span-2 place-self-center"
                    src="../images/me.png"
                    alt="MyProfile photo"
                />
                <div className="col-start-4 col-span-3 place-self-center font-serif text-6xl">
                    <div className="flex flex-row " >
                        <h1>
                            Hello there
                        </h1>
                        <img src={hand} alt="waving-hand" style={{
                            height:60,
                            margin:10
                        }}/>
                        <h1>,</h1>
                    </div>
                    <div className="flex flex-row">
                        <br/>
                        <h1>
                            I'm
                            <span
                                className="extrabold"
                                style={{
                                    color: "blue",
                                    margin: 15
                                }}
                            >
                                Naman Singh
                            </span>
                        </h1>
                    </div>
                    <AccountLink className="flex flex-row p-4">
                        <Link to={github_profile}>
                            <img src={github_icon} alt="github_link"/>
                        </Link>
                        <Link to={linkedin_profile}>
                            <img src={linkedin_icon} alt="linkedin_link"/>
                        </Link>
                        <Link to={insta_profile}>
                            <img src={insta_icon} alt="insta_link"/>
                        </Link>
                        <Link to={gmail_profile}>
                            <img src={gmail_icon} alt="gmail_link"/>
                        </Link>
                    </AccountLink>
                </div>
            </div>
        </section>
    )
};

export default Profile;