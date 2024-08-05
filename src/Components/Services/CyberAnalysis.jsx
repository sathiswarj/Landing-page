import React from 'react'
import '../Home.css'
import CyberTeam from './CyberTeam'
const CyberAnalysis = () => {
  return (
    <>

      <div className='container-fluid'>
        <section className='title' style={{ marginTop:'100px',marginBottom: '150px' }}>
          <div className='col-sm-12'>
            <h2 class="section-title">Cyber Analysis </h2>
            <p className='section-text' style={{fontSize:"18px",textAlign: 'center'}}>Aviraj Infotech's cyber analysis solutions secure institutions and enterprises, protecting data and ensuring operational resilience</p>
          </div>
        </section>
        <div className='row' >
          <div className='col-sm-6'>
            <h3>Cyber Analysis</h3>
            <hr className='header-line' />
            <p className='section-text'>Aviraj Infotech's cyber analysis detects threats, ensures data security, and maintains operational integrity for institutions.</p>
            <p></p>
          </div>
          <div className='col-sm-6'>
            <h3>Cybersecurity Solutions</h3>
            <hr className='header-line' />
            <p className='section-text'>Aviraj Infotech's cybersecurity solutions identify vulnerabilities, protect data, and ensure secure, uninterrupted operations for institutions and businesses.</p>
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
                  <div className="card-title"><h3>Threat Detection                  </h3></div>
                  <div className='card-text'><p>Identifying potential threats to prevent data breaches and cyber attacks.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Data Protection</h3> </div>
                  <div className='card-text'><p>Ensuring data integrity with advanced encryption and security measures.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>

              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Operational Security</h3></div>
                  <div className='card-text'><p>Maintaining uninterrupted operations through robust cybersecurity protocols and monitoring.</p></div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className="card-title"><h3>Vulnerability Assessment</h3></div>
                  <div className='card-text'><p>Regularly assessing systems to identify and mitigate security weaknesses.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CyberTeam />
      </div>

    </>)
}

export default CyberAnalysis