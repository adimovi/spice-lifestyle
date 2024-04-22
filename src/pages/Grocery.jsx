import React from 'react'

function Grocery() {
  return (
    <>
    <h1 className='text-center bold pt-5'>Spice Grocery</h1>
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-11 col-12">
          <div className="bg-white p-lg-4 p-2 shadow rounded-3">
            <p>Existing grocery logistics fulfilment systems have either overstepped the use of robots to the extent they make no practical commercial sense, or in other cases they are too labour intensive and primitive.</p>
            <p>After studying the sector in some depth over time, both from the operators and customers perspective, we believe we have come up with a very efficient system, but it will only suit about 20% of the total households in any western developed country for various reasons.</p>
            <p className='mb-0'>Given the fact that there is an average of 2.5 persons to each household, we would require one main fulfilment centre for every 2 million population, which could service upto 160,000 households with the use of three sub fulfilment centres for fresh products.</p>
          </div>
          
          <div className="row my-5">
            <div className="col-lg-6 col-12">
            <div className="bg-white p-lg-4 p-2 shadow rounded-3">
              <p className='bold'>Spice Grocery USPs:</p>
              <p>We believe that the convenience for our suitable customers is at a level that simply doesn’t exist today, due to the design of the system.</p>
              <p>We will be able to save our customers an average of between 10 to 15% of their annual grocery bill, while still maintaining a 5% margin.</p>
              <p>This truly is a very unique and efficient logistics system from many points of view, and is designed to hold onto customers indefinitely into the future.</p>
              <p className='mb-0'>It’s also an extremely environmentally friendly system, which just happens to be a coincidence, but it doesn’t hurt!</p>
              </div>
              <table className="table mt-5 mb-3 table-bordered bbq">
  <thead>
    <tr>
      <th scope="col" style={{width:"75%"}}>Expected Investment Required</th>
      <th scope="col" style={{width:"30%"}}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Further R&D</th>
      <td>2,000,000</td>
    </tr>
    <tr>
      <th scope="row">HQ Team costs for two years</th>
      <td>12,000,000</td>
    </tr>
    <tr>
      <th scope="row">Open a set of 1 main & 3 sub fulfilment centres</th>
      <td>120,000,000</td>
    </tr>
    
    <tr>
      <th scope="row">Total</th>
      <td>134,000,000</td>
    </tr>
  </tbody>

  
</table>

<table className="table mt-5 mb-3 table-bordered bbq">
  <thead>
    <tr>
      <th scope="col" style={{width:"75%"}}>Total Expected annual income for one set</th>
      <th scope="col" style={{width:"30%"}}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2 million population</th>
      <td>2,000,000</td>
    </tr>
    <tr>
      <th scope="row">Divided by 2.5 persons per household</th>
      <td>800,000</td>
    </tr>
    <tr>
      <th scope="row">800,000 potential households x <b>10%</b>, <b>not 20</b></th>
      <td>80,000</td>
    </tr>
    
    <tr>
      <th scope="row">Average annual grocery spend per household</th>
      <td>10,000</td>
    </tr>

    <tr>
      <th scope="row">Total expected revenue per fulfilment set</th>
      <td>800,000,000</td>
    </tr>

    <tr>
      <th scope="row">5 % gross margin annual income for one set</th>
      <td>40,000,000</td>
    </tr>

    <tr>
      <th scope="row">(20% of households = 80 m P/A)</th>
      <td></td>
    </tr>


  </tbody>

  
</table>



            </div>
            <div className="col-lg-6 col-12 align-self-center">
              <img src="/imgs/hangar.jpg" className='mb-5' alt="" />
              <img src="/imgs/vegetables.jpg" className='mb-5' alt="" />
              <img src="/imgs/meat.jpg" alt="" />
            </div>
          </div>
          <img src="/imgs/van.jpg" alt="" />
        </div>
        </div>
        </div>
    </>
  )
}

export default Grocery