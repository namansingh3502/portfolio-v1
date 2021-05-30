import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"


const AccountLink = styled.div`
    img {
      margin-top: 30px;
    }
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
        <section className="min-h-screen flex flex-row-1 place-self-center">
            <div className="grid grid-cols-6 md:gap-5 lg:gap-10" style={{color:"white"}}>
                <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-2 place-self-center">
                    <StaticImage
                        className=" image flex flex-row object-contain"
                        src="../images/me.png"
                        alt="MyProfile photo"
                    />
                </div>
                <div className="col-start-2 col-span-4 md:col-start-4 md:col-span-3 text-3xl md:text-4xl lg:text-5xl xl:text-7xl self-center font-serif">
                    <div className="flex flex-row" >
                        <h1>
                            Hello there,</h1>
                    </div>
                    <div className="flex flex-row mt-5">
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
                    <AccountLink className="flex flex-row ">
                        <Link to={github_profile}>
                            <img className="h-8 lg:h-10 mr-4" src={github_icon} alt="github_link"/>
                        </Link>
                        <Link to={linkedin_profile}>
                            <img className="h-8 lg:h-10 mr-4" src={linkedin_icon} alt="linkedin_link"/>
                        </Link>
                        <Link to={insta_profile}>
                            <img className="h-8 lg:h-10 mr-4" src={insta_icon} alt="insta_link"/>
                        </Link>
                        <Link to={gmail_profile}>
                            <img className="h-8 lg:h-10 mr-4" src={gmail_icon} alt="gmail_link"/>
                        </Link>
                    </AccountLink>
                </div>
            </div>
        </section>
    )
};

export default Profile;