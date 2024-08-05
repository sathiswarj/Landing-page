import React from 'react'
import '../Home.css'
import AITeam from './AITeam'

const Integration = () => {
  return (
    <>

      <div className='container-fluid'>
        <section className='title' style={{ marginTop:'100px',marginBottom: '150px' }}>
          <div className='col-sm-12'>
            <h2 class="section-title" style={{ textAlign: 'center'}}> Artificial Intelligence & Machine Learning</h2>
            <p className='section-text' style={{fontSize:"18px",textAlign: 'center'}}>Aviraj Infotech excels in AI and ML solutions, revolutionizing education and business with intelligent automation</p>
          </div>
        </section>
        <div className='row' >
          <div className='col-sm-6'>
            <h3>AI for Education</h3>
            <hr className='header-line' />
            <p className='section-text'>AI-powered tools enhance learning by personalizing educational experiences and fostering innovative problem-solving skills.</p>
            <p></p>
          </div>
          <div className='col-sm-6'>
            <h3>ML for Enterprises</h3>
            <hr className='header-line' />
            <p className='section-text'>Machine learning solutions improve business operations through predictive analytics, automation, and data-driven decision-making.</p>
          </div>
        </div>
        <div className='main-heading'>
          <div className='header'>
            <h1 style={{ textAlign: 'center' }}>Why Choose Us ?</h1>
            <hr className='line' />
          </div>
          <div className='row'>
            <div className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Expertise in Technology</h3></div>
                  <div className='card-text'><p>AI transforms industries through machine learning, natural language processing, and automation.
</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Customized Solutions</h3> </div>
                  <div className='card-text'><p>AI offers customized solutions through personalized recommendations, automation, predictive analytics.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>

              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Enhanced Learning</h3></div>
                  <div className='card-text'><p>AI enhances learning through personalized tutoring, adaptive learning, and data-driven insights.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Operational Efficiency</h3></div>
                  <div className='card-text'><p>AI boosts operational efficiency with automation, optimization, predictive analytics, real-time insights.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AITeam />
      </div>

    </>
  )
}

export default Integration