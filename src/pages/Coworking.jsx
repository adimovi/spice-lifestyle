import React from 'react'

function CoWorking() {
  return (
    <>
    <h1 className='text-center bold pt-5'>Spice Lifestyle CoWorking</h1>
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10 p-lg-4 p-2 col-12 bg-white rounded-3 shadow">
         <p>It was obvious to me long before the Covid pandemic that coworking spaces were not a viable business because when you did the simple math of the cost of office space in addition to the running costs, 
          and divided the total by the number of seats available, you would need somewhere north of an 80% occupancy rate just to break even.</p>
         <p>I have come up with a very unique and unusual solution that I am very sure young affluent people will be very happy to use for various reasons, 
          and the main point is that each coworking space will break even for the franchise partner at an approximate 30% occupancy rate.</p>
         <p className='mb-0'>The overall required R&D investment below includes hiring a manager in 1,000 locations worldwide @ an initial cost of 10k each.</p>
        </div>

        <div className="row d-flex justify-content-center my-5">
        <div className="col-lg-5 align-self-center mt-4 col-12">
        <table className="table  table-bordered bbq">
  <thead>
    <tr>
      <th scope="col" style={{width:"65%"}}>Expected Investment Required</th>
      <th scope="col" style={{width:"35%"}}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Further R&D</th>
      <td>10,000,000</td>
    </tr>
    <tr>
      <th scope="row">HQ Team financed for two years</th>
      <td>2,000,000</td>
    </tr>
    <tr>
      <th scope="row">Finance 10 proof of concept outlets</th>
      <td>1,000,000</td>
    </tr>
    
    <tr>
      <th scope="row">Total</th>
      <td>13,000,000</td>
    </tr>
  </tbody>
</table>

<table className="table table-bordered bbq">
  <thead>
    <tr>
      <th scope="col" style={{width:"65%"}}>Expected Investment Required</th>
      <th scope="col" style={{width:"35%"}}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1,000 Outlets</th>
      <td>1,000</td>
    </tr>
    <tr>
      <th scope="row">150 seats @ 60% occupancy</th>
      <td>90</td>
    </tr>
    <tr>
      <th scope="row">300 days per year</th>
      <td>300</td>
    </tr>
    
    <tr>
      <th scope="row">2 euro per seat booking fee</th>
      <td>2</td>
    </tr>

    <tr>
      <th scope="row">Total annual income</th>
      <td>54,000,000</td>
    </tr>
  </tbody>
</table>

        </div>
        <div className="col-lg-5 col-12 align-self-center">
          <img src="/imgs/cowplan.jpg" alt="" style={{width:"100%"}}/>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CoWorking;