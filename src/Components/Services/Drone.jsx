import React from 'react'
import '../Home.css'
import DroneTeam from './DroneTeam'
const Drone = () => {
  return (
    <>

      <div className='container-fluid'>
        <section className='title' style={{ marginTop:'100px',marginBottom: '150px' }}>
          <div className='col-sm-12'>
            <h2 class="section-title" style={{ textAlign: 'center'}}>Drones & Robotics</h2>
            <p className='section-text' style={{fontSize:"18px", textAlign: 'center'}}>Aviraj Infotech pioneers robotic and drone solutions, empowering schools, colleges, and enterprises with innovative efficiency enhancements.

</p>
          </div>
        </section>
        <div className='row' >
          <div className='col-sm-6'>
            <h3>Robotics</h3>
            <hr className='header-line' />
            <p className='section-text'>Aviraj Infotech's educational robotic kits foster STEM skills, creativity, and critical thinking in students. Custom solutions for enterprises automate tasks, boost precision, and enhance productivity.</p>
            <p></p>
          </div>
          <div className='col-sm-6'>
            <h3>Drones</h3>
            <hr className='header-line' />
            <p className='section-text'>Aviraj Infotech’s drones enhance education with STEM projects and improve business efficiency with aerial surveillance and delivery.</p>
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
                  <div className='card-text'><p>Our cutting-edge solutions leverage the latest advancements in robotics and drone technology.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Customized Solutions</h3> </div>
                  <div className='card-text'><p>We provide tailored robotic and drone systems to meet specific educational and business needs.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>

              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Enhanced Learning</h3></div>
                  <div className='card-text'><p>Our educational kits foster creativity and critical thinking, preparing students for future careers.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Operational Efficiency</h3></div>
                  <div className='card-text'><p>Our enterprise solutions automate tasks, improve precision, and boost productivity, keeping businesses competitive.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DroneTeam />
      </div>

    </>)
}

export default Drone