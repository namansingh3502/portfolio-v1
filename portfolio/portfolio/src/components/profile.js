import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Profile = () => {
    const hand = "https://raw.githubusercontent.com/aemmadi/aemmadi/master/wave.gif";
    return (
        <section className="h-screen flex flex-row-1 place-self-center">
            <div className="grid grid-cols-6 gap-10" style={{color:"white"}}>
                <StaticImage
                    className="col-start-2 col-span-2 place-self-center"
                    src="../images/me.png"
                    alt="MyProfile photo"
                />
                <div className="col-start-4 col-span-3 place-self-center font-serif text-7xl">
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
                                style={{
                                    color: "blue",
                                    margin: 15
                                }}
                            >
                                Naman Singh
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Profile;