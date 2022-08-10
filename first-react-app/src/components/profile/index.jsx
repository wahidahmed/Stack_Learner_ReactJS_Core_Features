import React, { Component } from 'react';
import Bio from './bio';
import Skills from './skills';
import Links from './links';





class Profile extends Component{
    render(){
        return(
            <div>
                <Bio />
                <Skills />
              <Links />
            </div>
        )
    }
}

export default Profile