import * as React from "react"
import {Helmet} from 'react-helmet'

import NavigationBar from '../components/navigationbar';
import Profile from '../components/profile';
import AboutMe from '../components/aboutme';
import Backpack from '../components/backpack';

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <html lang='en' />
            <title>Naman Singh</title>
        <meta name='description' content="Naman Singh's Portfolio"  />
      </Helmet>
      <main>
        <NavigationBar/>
        <div className="container mx-auto px-2">
            <Profile Tag="section" fadeIn="soft"/>
            <AboutMe/>
            <Backpack/>
        </div>
      </main>
    </>
  )
}
export default IndexPage
