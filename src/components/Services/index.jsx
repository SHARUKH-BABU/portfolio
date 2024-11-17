import React, { useRef } from 'react'
import "./Services.css"
import { FaPaintBrush } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Services = () => {

  const articleRef = useRef([]);

  useGSAP(() => {
    gsap.from(articleRef.current, {
      x: 500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: articleRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
      stagger : 0.5,
    });
  })


  return (
    <section id="services">
      <div className="section_wrapper services_wrapper">
        <div className="section_header center">
          <h2 className="primary_title text-center">Services</h2>
          <p className="text_muted description">
            I transform your ideas, and consequently your desires, into a 
            distinctive web project that both inspires you and captivates your customers.
          </p>
        </div>
        <div className="services_group">
          <article className="service" ref={(e)=> articleRef.current[0]=e}>
            <div className="service_top">
              <div className="icon_container">
                <FaPaintBrush className='icon' />
              </div>
              <h3 className="title">UI/UX Design</h3>
            </div>
            <div className="service_middle">
              <p className="text_muted description">
              Creating intuitive and engaging user interfaces is at the heart of my UI/UX design services. I specialize in designing user-centric interfaces that enhance user satisfaction and improve the overall usability of your product. By conducting thorough user research and applying best practices in design principles, I craft visually stunning and easy-to-navigate interfaces that resonate with your target audience and achieve your business goals.
              </p>
            </div>
          </article>
          {/* End ui/ux design */}

          <article className="service" style={{"--color-primary" : "var(--color-success)"}} ref={(e)=> articleRef.current[1]=e}>
            <div className="service_top">
              <div className="icon_container">
                <BsCodeSquare className='icon' />
              </div>
              <h3 className="title">Web Development</h3>
            </div>
            <div className="service_middle">
              <p className="text_muted description">
              With a solid foundation in full-stack web development, I offer comprehensive web development services. From designing user-friendly interfaces to implementing robust backend solutions, I ensure your website is not only visually appealing but also highly functional and responsive. Leveraging the latest technologies such as HTML, CSS, JavaScript, MongoDB, ExpressJS, React, Node.js, and more, I create websites that provide seamless user experiences and drive business growth.
              </p>
            </div>
          </article>
          {/* End web development */}


          <article className="service" style={{"--color-primary" : "blueviolet"}} ref={(e)=> articleRef.current[2]=e}>
            <div className="service_top">
              <div className="icon_container">
                <TfiWrite className='icon' />
              </div>
              <h3 className="title">Content Creation</h3>
            </div>
            <div className="service_middle">
              <p className="text_muted description">
              Content is king in the digital world, and my content creation services are designed to help you make a lasting impression. Whether it's compelling copywriting, engaging blog posts, or visually appealing graphics, I produce high-quality content that captures your brand's voice and connects with your audience. By understanding your business objectives and audience needs, I create content that not only informs and entertains but also drives engagement and conversions.
              </p>
            </div>
          </article>
          {/* End content creation */}

        </div>
      </div>
    </section>
  )
}

export default Services
