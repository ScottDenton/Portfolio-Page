import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpeg'
import Resume from './Scott-Denton-Resume.pdf'


class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1 className="headerName"><strong style={{"font-size": '1.35em'}} >Scott Denton</strong></h1>
                    <h1>Software Developer </h1>
                    <ul className='headerLinkUl'>
                      <li><a href="#recent_work" className="headerLink">My Projects </a></li>
                      <li><a href="#about_me" className="headerLink">About Me </a></li>
                      <li><a href="#contact" className="headerLink">Get In Touch</a></li>
                      <li><a href="https://medium.com/@scott.denton.1989" className="headerLink">Blog Posts</a></li>
                      <li><a href={Resume} className="headerLink"  target='blank' >View My Resume </a></li>
                    </ul>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
