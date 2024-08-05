import React from 'react'
import '../Home.css'
import Team from '../Team'
const Application = () => {
  return (
    <>

      <div className='container-fluid'>
        <section className='title' style={{ marginTop:'100px',marginBottom: '150px' }}>
          <div className='col-sm-12'>
            <h2 class="section-title" style={{  textAlign: 'center'}}>Application Development</h2>
            <p className='section-text' style={{fontSize:"18px",textAlign: 'center'}}>Aviraj Infotech specializes in app development, creating innovative solutions for both educational and business needs.</p>
          </div>
        </section>
        <div className='row' >
          <div className='col-sm-6'>
            <h3>Educational Apps</h3>
            <hr className='header-line' />
            <p className='section-text'>Custom apps enhance learning experiences, offering interactive and engaging tools for students and educators.</p>
            <p></p>
          </div>
          <div className='col-sm-6'>
            <h3>Business Apps</h3>
            <hr className='header-line' />
            <p className='section-text'>Tailored business apps streamline operations, improve customer engagement, and drive productivity and growth.</p>
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
                  <div className="card-title"><h3>AI Integration </h3></div>
                  <div className='card-text'><p>App development incorporates AI for smarter functionality, predictive analytics, and improved user experience.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Customized Solutions</h3> </div>
                  <div className='card-text'><p>App development delivers customized solutions through tailored features, user interfaces, and functionalities.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>

              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Enhanced Learning</h3></div>
                  <div className='card-text'><p>App development enhances learning with interactive features, personalized content, and real-time feedback.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Operational Efficiency</h3></div>
                  <div className='card-text'><p>App development increases operational efficiency via automation, streamlined processes, and integrated systems.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Team />
      </div>

    </>)
}

export default Application