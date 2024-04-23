import React from 'react'

function Home() {
  return (
    <>
    <div className="container-fluid py-5 hero">
        <div className="container py-5">
        <h1 className="text-center bold mb-4 slide-in-left" >The Spice Lifestyle Brand</h1>
        <div className="slide-in-right">
        <h2 className="text-center mb-3">Innovative Practical Common Sense and yet exciting Products & Services</h2>
        <h2 className="text-center mb-3">For a specific demographic of young adventurous affluent professionals worldwide</h2>
        <h2 className="text-center">Which requires practically no marketing budget.</h2>
        </div>
        </div>
    </div>

    <div className="container py-5 mt-5">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-11 col-12">
            <div class="table-responsive">
            <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" style={{width:"15%"}}>Business</th>
      <th scope="col" style={{width:"15%"}}>Investment required</th>
      <th scope="col" style={{width:"20%"}}>Potential Annual Gross Income</th>
      <th scope="col" style={{width:"10%"}}>ROI</th>
      <th scope="col" style={{width:"40%"}}>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Spice BBQ Restaurants</th>
      <td>4,700,000</td>
      <td>142,000,000</td>
      <td>3 Years</td>
      <td>This is with 1,000 outlets franchised</td>
    </tr>
    <tr>
      <td colSpan={5} style={{color:"var(--main-color)"}} className='bold'>The BBQ Spice Restaurants will self finance the roll out of the remaining concepts after year 3.</td>
    </tr>
    <tr>
      <th scope="row">Spice Coworking</th>
      <td>13,000,000</td>
      <td>54,000,000</td>
      <td>2 Years</td>
      <td>This is with 1,000 outlets franchised</td>
    </tr>
    <tr>
      <th scope="row">Spice Professional Services</th>
      <td>40,700,000</td>
      <td>30,625,000</td>
      <td>2 Years</td>
      <td>This is with 700 outlets franchised.</td>
    </tr>
    
    <tr>
      <th scope="row">Spice CoLiving Villages</th>
      <td>16,300,000</td>
      <td>1,920,000</td>
      <td>8 Years</td>
      <td>Roll out 20 villages per year after prototype</td>
    </tr>
    <tr>
      <th scope="row">Spice Grocery</th>
      <td>134,000,000</td>
      <td>40,000,000</td>
      <td>6 Years</td>
      <td>Roll out 50 sets of fulfilment centres per year after prototype</td>
    </tr>
    <tr>
      <th scope="row">Spice Fashion</th>
      <td>?</td>
      <td>76,800,000</td>
      <td>?</td>
      <td>Roll out 50 sets of fulfilment centres per year after prototype
     </td>
    </tr>
  </tbody>
</table>
</div>
        
          <p className='mt-5 mb-0'>We need 6.5 million to roll out the first BBQ concept to 1,000 outlets within 4 years, and this business will finance the creation and rollout of the remaining 5 concepts, over the following 6 years. </p>
          <p className='mb-0'>We estimate that the total value of the company will be in the region of 50 billion within a 10 year time frame, if all goes to plan, or even close to it.</p>
          <p>Very unique business concepts and building up a loyal global customer demographic, without marketing costs or expensive high street stores is the key. This will keep our top quality products and services very competitive to the benefit of our global community of customer members.</p>
        
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