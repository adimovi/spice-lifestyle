import React from 'react'

function Contact() {
  return (
   <>
   <div className="container slide-in-left">
    <div className="">
      <div className="row bg-white shadow rounded-3 p-lg-4 p-3 my-5 mx-lg-5 mx-2">
        <div className="col-lg-8 col-12 align-self-center">
          <h3 className='mb-1'>To contact Barry for a zoom video call or a personal meeting, simply send him an email to: <br className='d-lg-block d-none'/><a href="mailto:barry@birchleyenterprisesireland.com" style={{wordBreak:"break-all"}}>barry@birchleyenterprisesireland.com</a></h3>
          <h3 className='mb-lg-0 mb-3'>And he will reply promptly.</h3>     
       </div>
       <div className="col-lg-4 col-12">
       <img src="imgs/barry.jpg" className='rounded-3 mb-lg-0 mb-3' alt="barry" style={{width:"100%"}} />
       </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Contact