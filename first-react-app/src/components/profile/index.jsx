import React, { Component } from 'react';
import Bio from './bio';
import Skills from './skills';
import Links from './links';





class Profile extends Component{


    me={
        name:'wahid ahmed',
        title:'i am full stack developer for javascript functional programming'
    }

    render(){
        return(
            <div>
                <Bio name={this.me.name} title={this.me.title}/>
                <Skills />
                <Links />
            </div>
        )
    }
}

export default Profile