import React from 'react';

export default function Bbq() {
  return (
    <>
      <h1 className="text-center bold pt-5">Spice Lifestyle BBQ</h1>
      <div className="container py-5">
        <div className="row d-flex  justify-content-center ">
          <div className="col-lg-10 col-12 p-lg-4 p-2 bg-white rounded-3 shadow">
            <p>It’s always nice to try new culinary experiences as you travel the world, BUT it's also nice to find a
              place to eat that you recognise and know what to expect.</p>
            <p>As of now, the only brands that exist everywhere are the fast food chains, we are all familiar with, BUT
              you don’t want to be eating too much of that food for obvious reasons.</p>
            <p className="mb-0">There is no point in trying to create a global chain of high end dining restaurants for
              many reasons, BUT suppose you created a quality healthy and very tasty eating option that would transcend
              all cultures, where the customer would pay between $15 & $25.</p>
          </div>

          <div className="col-lg-10 col-12 p-lg-4 p-2 bg-white my-5 rounded-3 shadow">
            <p className="bold">Spice BBQ USPs:</p>
            <p>All customers seated and eating a starter within 4 minutes.</p>
            <p>Main Course served within a further 10 minutes.</p>
            <p>50 to 70 seats per outlet only, to keep them efficient.</p>
            <p>Minimum staff required.</p>
            <p>A simple straightforward quality menu.</p>
            <p className="mb-0">A uniquely designed cooking method in conjunction with an IT system.</p>

          </div>

          <img src="imgs/bbq-rest.jpg" alt="bbg plan" className="d-block mx-auto rounded-3" style={ { width: '80%' } }/>

          <div className="col-lg-10 col-12 my-5">
            <table className="table table-bordered bbq">
              <thead>
              <tr>
                <th scope="col" style={ { width: '65%' } }>Expected Investment Required</th>
                <th scope="col" style={ { width: '35%' } }></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">Initial further research</th>
                <td>200,000</td>
              </tr>
              <tr>
                <th scope="row">First 3 proof of concept prototype outlets</th>
                <td>300,000</td>
              </tr>
              <tr>
                <th scope="row">Further 60 proof of concept outlets</th>
                <td>6,000,000</td>
              </tr>

              <tr>
                <th scope="row">Total</th>
                <td>6,500,000</td>
              </tr>
              </tbody>
            </table>

            <table className="table table-bordered bbq">
              <thead>
              <tr>
                <th scope="col" style={ { width: '65%' } }>Total Expected Income medium term</th>
                <th scope="col" style={ { width: '35%' } }></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1,000 franchised outlets</th>
                <td>1,000</td>
              </tr>
              <tr>
                <th scope="row">3 sittings per place per day @ 60 places</th>
                <td>180</td>
              </tr>
              <tr>
                <th scope="row">Each sitting with an average spend of</th>
                <td>22</td>
              </tr>

              <tr>
                <th scope="row">360 days per year</th>
                <td>360</td>
              </tr>

              <tr>
                <th scope="row">Total Turnover</th>
                <td>1,425,600,000</td>
              </tr>

              <tr>
                <th scope="row">with a 10% franchise margin</th>
                <td>142,560,000</td>
              </tr>

              <tr>
                <th scope="row">(Hope to increase to 10k outlets in time)</th>
                <td></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
