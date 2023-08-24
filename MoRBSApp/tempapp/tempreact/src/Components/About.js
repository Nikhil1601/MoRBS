import React, {Fragment,useEffect} from 'react';
import Person  from '../Images/Person.jpg';
import '../CSS/About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(()=>{

Aos.init({duration:2000,once:true,easing:"ease"})
      })
  return (
    
        <Fragment>
            <section className='about'>
                <div className='about-row'>
                    <div data-aos="fade-right" className='about-column'>
                        <div className='img'>
                            <img src={Person} alt="Person"/>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='about-column'>
                        <div className='about-text'>
                            <div className='about-title'>
                                <span>About Us</span>
                                <h2>Better Life For Everyone</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac odio tempor orci dapibus. Elementum sagittis vitae et leo. Pellentesque sit amet porttitor eget dolor.</p>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac odio tempor orci dapibus. Elementum sagittis vitae et leo. Pellentesque sit amet porttitor eget dolor.</h4>
                            <div className='number'>
                                <i class='fa-solid fa-phone'></i>
                                <h3>123-764-647| 129-137-876</h3>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </Fragment>
  )
}
export default About;
