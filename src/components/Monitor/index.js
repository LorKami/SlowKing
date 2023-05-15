import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from "react-scroll";
import '../Monitor/Monitor.css'

import { MdCatchingPokemon } from 'react-icons/md';
import { AiFillStar, AiOutlineLine } from 'react-icons/ai';

import KingLogo from '../../images/king3.png'
import KingMonitor from '../../images/Monitor.png'
import KingMapComplete from '../../images/mapcomplete.png'


function handleNavClick(section) {
  animateScroll.scrollTo(section);
}

const Monitor = () => {

      const [activeSection, setActiveSection] = useState(null);

      const handleSetActive = (to) => {
        setActiveSection(to);
      };


      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          setIsScrolled(scrollTop > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



  return (
    <div>
      


    <div className={isScrolled ? 'PrincipalHeader sticky' : 'PrincipalHeader'}>

        <div className='HeaderSection'>
        <img src={KingLogo} />
        <Link to="home" smooth={true} spy={true} activeClass="active" offset={5} duration={1500} onSetActive={handleSetActive}><a className='ButtonHome'><MdCatchingPokemon style={{ verticalAlign: 'middle' }} size='24px'/> HOME</a></Link>
        <Link to="About" smooth={true} spy={true} activeClass="active" offset={10} duration={1500} onSetActive={handleSetActive}><a className='ButtonHome'><MdCatchingPokemon style={{ verticalAlign: 'middle' }} size='24px'/> ABOUT</a></Link>
        <Link to="Tokenomics" smooth={true} spy={true} activeClass="active" duration={1500} onSetActive={handleSetActive}><a className='ButtonHome'><MdCatchingPokemon style={{ verticalAlign: 'middle' }} size='24px'/> TOKENOMICS</a></Link>
            <a className='ButtonTwitter' href='https://twitter.com/SlowKinSOL' target="_blank"><MdCatchingPokemon style={{ verticalAlign: 'middle' }} size='24px'/> TWITTER</a>
        </div>
    </div>


    <section id='home'>
    <div className='Monitor'>
      <div className='MonitorWalk'>
        <img src={KingMonitor} />
      </div>
    </div>
    </section>

    <section id='About'>

      <div className='AboutSection'>

        <div className='AboutSectionBoxes'>

        <h2>WHERE'S SLOWKING?</h2>
        <div className='AboutSectionInfo dialogue-container'>
          <div className='dialogue-box'>
        <p class="dialogue-text">SlowKing is a new crypto meme token related to the famous Pokemon character Slowpoke with popularity among crypto enthusiasts and fans of this iconic Pokemon character</p>
      </div>
      </div>
      <div className='AboutSectionButton'>
        <a href='#' target='_blank'>BUY NOW</a>
        <a href='#' target='_blank'>SWAP RAYDIUM</a>
      </div>
      </div>

      </div>
    </section>

    <section id='Tokenomics'>
      <div className='RoadmapSection'>
        <div className='RoadmapBoxes'>
          <div className='RoadmapInfo'>
          <h2>TOKENOMICS</h2>
          <img src={KingMapComplete} />
          </div>
        </div>
      </div>
    </section>

    <div className='Footer'>
      <p>Copyright © 2023. All Rights Reserved by SlowKing</p>
    </div>

    </div>
  )
}

export default Monitor