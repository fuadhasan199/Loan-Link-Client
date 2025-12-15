import React from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Feedback = () => {
    return ( 

        
        <div className='container mx-auto justify-center mt-10'> 
        <h2 className='font-bold  mt-4 text-3xl text-center '>Customer Feedback</h2> <hr className='mt-2' />
              <Swiper 
               modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay:2500, disableOnInteraction:false }} 
      loop:true
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="card-body shadow-2xl m-2">
    <h2 className="card-title font-bold">Customer Name: Rahim Uddin</h2>
    <p>“This service was a complete game-changer for me. From application to disbursement, everything was smooth and transparent.”</p> 
    <h1 className='card-title'>Loan Type: Education Loan</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-success text-gray-900 p-2 ">Rating: ★★★★★</button>
    </div> 
    </div>
      </SwiperSlide> 

 

      <SwiperSlide>
            <div className="card-body shadow-2xl m-2">
    <h2 className="card-title font-bold">Customer Name: Tanvir Ahmed</h2>
    <p>“I didn’t expect the verification and approval process to be this fast. Everything was handled with real professionalism.”</p> 
    <h1 className='card-title'>Loan Type: Business Loan</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-success text-gray-900 p-2 ">Rating: ★★★★★</button>
    </div> 
    </div>
      </SwiperSlide> 

      <SwiperSlide>
           <div className="card-body shadow-2xl m-2">
    <h2 className="card-title font-bold">Customer Name: Nusrat Jahan</h2>
    <p>“I’ve tried multiple platforms before, but this one felt the most reliable and professionally managed.”</p> 
    <h1 className='card-title'>Loan Type: Personal Loan</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-success text-gray-900 p-2 ">Rating: ★★★★☆</button>
    </div> 
    </div>
      </SwiperSlide> 

      <SwiperSlide>
         <div className="card-body shadow-2xl m-2">
    <h2 className="card-title font-bold">Customer Name:Farzana Islam</h2>
    <p>“The support team was always responsive. Any questions I had were resolved quickly and clearly.”</p> 
    <h1 className='card-title'>Loan Type: Home Loan</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-success text-gray-900 p-2 ">Rating: ★★★★☆</button>
    </div> 
    </div>
      </SwiperSlide> 
          <SwiperSlide>
            <div className="card-body shadow-2xl m-2">
    <h2 className="card-title font-bold">Customer Name:Md. Hasan Ali</h2>
    <p>“Simple application, clear terms, and timely fund transfer. A service you can genuinely trust.”</p> 
    <h1 className='card-title'>Loan Type: Auto Loan</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-success text-gray-900 p-2 ">Rating: ★★★★★</button>
    </div> 
    </div>
      </SwiperSlide>  

      <SwiperSlide>
  <div className="card-body shadow-2xl m-2">
    <h2 className="card-title font-bold">Customer Name: Imran Hossain</h2>
    <p>
      “The loan terms were clearly explained and there were no hidden surprises. Everything felt transparent.”
    </p>
    <h1 className="card-title">Loan Type: SME Loan</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-success text-gray-900 p-2">
        Rating: ★★★★★
      </button>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="card-body shadow-2xl m-2">
    <h2 className="card-title font-bold">Customer Name: Sadiya Karim</h2>
    <p>
      “From document submission to approval, the entire process was smooth and well organized.”
    </p>
    <h1 className="card-title">Loan Type: Personal Loan</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-success text-gray-900 p-2">
        Rating: ★★★★☆
      </button>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="card-body shadow-2xl m-2">
    <h2 className="card-title font-bold">Customer Name: Mahmudul Hasan</h2>
    <p>
      “I appreciated how quickly my application was reviewed. The turnaround time exceeded expectations.”
    </p>
    <h1 className="card-title">Loan Type: Auto Loan</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-success text-gray-900 p-2">
        Rating: ★★★★★
      </button>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="card-body shadow-2xl m-2">
    <h2 className="card-title font-bold">Customer Name: Rukaiya Rahman</h2>
    <p>
      “The platform was easy to use, even for someone with little experience in online applications.”
    </p>
    <h1 className="card-title">Loan Type: Education Loan</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-success text-gray-900 p-2">
        Rating: ★★★★☆
      </button>
    </div>
  </div>
</SwiperSlide>

     
    </Swiper>
        </div>
    );
};

export default Feedback;