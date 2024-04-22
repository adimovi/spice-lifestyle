import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="container-fluid py-5 hero">
        <div className="container py-5">
        <h1 className="text-center bold mb-4">The Spice Lifestyle Brand</h1>
        <h2 className="text-center mb-3">Innovative Practical Common Sense and yet exciting Products & Services</h2>
        <h2 className="text-center mb-3">For a specific demographic of young adventurous affluent professionals worldwide</h2>
        <h2 className="text-center">Which requires practically no marketing budget.</h2>
        </div>
    </div>

    <div className="container py-5 mt-5">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-11 col-12">
            <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" style={{width:"20%"}}>Business</th>
      <th scope="col" style={{width:"15%"}}>Investment required</th>
      <th scope="col" style={{width:"20%"}}>Potential Annual Gross Income</th>
      <th scope="col" style={{width:"40%"}}>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Spice BBQ Restaurants</th>
      <td>4,700,000</td>
      <td>142,000,000</td>
      <td>This is with 1,000 outlets franchised</td>
    </tr>
    <tr>
      <th scope="row">Spice Coworking</th>
      <td>13,000,000</td>
      <td>54,000,000</td>
      <td>This is with 1,000 outlets franchised</td>
    </tr>
    <tr>
      <th scope="row">Spice Professional Services</th>
      <td>40,700,000</td>
      <td>30,625,000</td>
      <td>This is with 700 outlets franchised.</td>
    </tr>
    
    <tr>
      <th scope="row">Spice CoLiving Villages</th>
      <td>16,300,000</td>
      <td>1,920,000</td>
      <td>This is net just for one village, and can be rolled out.</td>
    </tr>
    <tr>
      <th scope="row">Spice Grocery</th>
      <td>134,000,000</td>
      <td>40,000,000</td>
      <td>This is for one set of fulfilment centres per 2 million population in developed countries and can be rolled out far and wide.</td>
    </tr>
    <tr>
      <th scope="row">Spice Fashion</th>
      <td>2,400,000</td>
      <td>76,800,000</td>
      <td>This is per 2 million population in western developed countrie, but investment required is not accurate <br className='d-lg-block d-none'/>
( <Link to="/spice-lifestyle/fashion">See the Spice Fashion page</Link>)
</td>
    </tr>
  </tbody>
</table>
        
          <p className='mt-5'>The total investment required is just over 200 million, but that is not taking income into account.</p>
          <p>We will need in the region of 70 million to roll out the first 4 concepts more or less simultaneously, at which point we should have easily generated income for the remainder of the investment, plus we will have built up an audience of the exact demographic we require to maximise the last two concepts.</p>
        
        <div className="row my-5 p-lg-4 p-2 bg-white rounded-3 shadow">
            <div className="col-lg-8 col-12">
              <p className='mb-0'>Barry Murphy:</p>
              <p>I have created quite a few businesses over the past few decades, which led me to continuously travel the world. Having a very curious mind, I am continuously observing a lot of trends and human nature across different cultures, and I am always asking myself if there isn’t a better way to execute certain tasks in any situation.</p>
              <p>I handed over the reins of my main business to my eldest son three years ago, and I decided to spend my time designing new concepts which have global potential, using my travel observations and proven design skills.</p>
              <p>After conducting a lot of research across various industries, my plan is to find a compatible investor, who would like to work with me towards launching the products and services I have designed, as long as they have a similar business philosophy as my own.</p>
              <p className='mb-0'>My plan is to steer the ship in the right direction towards the point of launch of all concepts, and then to let people far more capable than myself to take over from there.</p>
            </div>
            <div className="col-lg-4 col-12 align-self-center">
                <img src="imgs/barry.jpg" className='rounded-3' alt="" style={{width:"100%"}} />
            </div>

            
        </div>

        <p className='text-center'>(To find out more information on each of the individual concepts I have designed, click on the relevant page in the menu. )</p>
        
            </div>
        </div>
   
    </div>
  
    </>
  )
}

export default Home;