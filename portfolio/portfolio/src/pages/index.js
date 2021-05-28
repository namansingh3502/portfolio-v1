import * as React from "react"

import Profile from '../components/profile';
import NavigationBar from '../components/navigationbar';

// markup
const IndexPage = () => {
  return (
      <main>
        <NavigationBar/>
        <div className="container mx-auto px-2">

          <Profile Tag="section" fadeIn="soft"/>
            <div style={{color:"white"}}>
                naman<br/>
                naman<br/>
                naman<br/>
                naman<br/>
                naman<br/>
                naman<br/>
            </div>

        </div>
      </main>
  )
}
export default IndexPage
