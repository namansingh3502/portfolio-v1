import * as React from "react"

import NavigationBar from '../components/navigationbar';
import Profile from '../components/profile';
import AboutMe from '../components/aboutme';
import Backpack from '../components/backpack';

// markup
const IndexPage = () => {
  return (
      <main>
        <NavigationBar/>
        <div className="container mx-auto px-2">
            <Profile Tag="section" fadeIn="soft"/>
            <AboutMe/>
            <Backpack/>
        </div>
      </main>
  )
}
export default IndexPage
