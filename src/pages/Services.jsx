import React from 'react'

function Services() {
  return (
    <>
    <h1 className='text-center bold pt-5'>Spice Professional Services</h1>
    <div className="container pb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10 col-12">
          <div className="bg-white shadow rounded-3 p-lg-4 p-2 my-5">
            <p>How much time have I lost looking for a reliable trustworthy local accountant, solicitor, engineer or business concierge relocation services provider in multiple locations that won’t rip you off?</p>
            <p>How many multinational corporations or global startups need to register new companies/trademarks, open bank accounts, or relocate staff, all across multiple locations worldwide simultaneously?</p>
            <p className='mb-0'>What’s the solution? Rent 700 office spaces worldwide of approximately 150 square meters (1,500 square feet), refit them and sublet them to seven carefully recruited professionals, who will operate as independent contractors. 
               Now look at the global potential we have at our hands, both for ourselves and our clients.</p>
          </div>

          <div className="bg-white shadow rounded-3 p-lg-4 p-2 mb-5">
            <p className='bold'>Spice Professional Services USPs:</p>
            <p>Reasonably priced quality professionals worldwide who can carry out tasks for local, national and even multinational clients across multiple jurisdictions simultaneously.</p>
            <p>A one stop global business concierge service to assist people relocating in every way possible, including sourcing schools, health care, car lease, 
              rental property, tour guides, nanny services, sports membership, administration management etc </p>
            <p className='mb-0'>A brand that can be completely trusted to perform reliably, without breaking the bank.</p>
          </div>
          <img src="/imgs/serv.jpg" alt="" style={{width:"100%"}} />

          <table className="table my-5  table-bordered bbq">
  <thead>
    <tr>
      <th scope="col" style={{width:"65%"}}>Expected Investment Required</th>
      <th scope="col" style={{width:"35%"}}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Further R&D</th>
      <td>200,000</td>
    </tr>
    <tr>
      <th scope="row">HQ Team costs for two years</th>
      <td>2,000,000</td>
    </tr>
    <tr>
      <th scope="row">Location Management Partner Recruitment</th>
      <td>3,500,000</td>
    </tr>

    <tr>
      <th scope="row">Office lease & Refits x 700 locations @ 50k</th>
      <td>35,000,000</td>
    </tr>
    
    <tr>
      <th scope="row">Total</th>
      <td>40,700,000</td>
    </tr>
  </tbody>
</table>

<table className="table my-5  table-bordered bbq">
  <thead>
    <tr>
      <th scope="col" style={{width:"100%"}}>Total Expected Income medium term</th>
      <th scope="col" style={{width:"35%"}}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">700 outlets</th>
      <td>700</td>
    </tr>
    <tr>
      <th scope="row">7 professionals</th>
      <td>7</td>
    </tr>
    <tr>
      <th scope="row">Average earning per day</th>
      <td>250</td>
    </tr>

    <tr>
      <th scope="row">250 days per year</th>
      <td>250</td>
    </tr>

    <tr>
      <th scope="row">Total expected annual turnover</th>
      <td>306,250,000</td>
    </tr>

    <tr>
      <th scope="row">Our expected margin of 10%</th>
      <td>30,625,000</td>
    </tr>
    
    <tr>
      <th scope="row" style={{color:"var(--main-color)"}}>(Plus we have 700 free reception showrooms)</th>
      <td></td>
    </tr>
  </tbody>
</table>
<img src="/imgs/servplan.jpg" style={{width:"100%"}} alt="" />
        </div>
      </div>
    </div>


    </>
  )
}

export default Services;