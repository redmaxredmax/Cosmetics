import React from 'react'
import { bestSellerData, blogsData, serviceData, socialData } from '../../data/data'
import { Bestseller } from '../../components/bestseller'
import { Button } from '../../components/ui/button'
import { Left } from "/public/icons/left.jsx"
import { Right } from "/public/icons/right.jsx"
import { Instagram } from "/public/icons/instagram.jsx"
import { ServiceCard } from "../../components/service"

export const Home = () => {
  return (
    <>
      <section>
        <div className='container flex text-center ml-auto mr-auto  w-[900px] mb-[64px]'  >
          <Button icon={<Left />}></Button>
          <div className='container text-center pt-[65px]'>
            <h2 className=' text-3xl font-medium mb-[40px]'>Our bestsellers</h2>
            <div className="w-[720px] gap-8 grid grid-cols-4 text-center ml-auto mr-auto mb-[36px]">
              {bestSellerData.map((item) =>
                <div key={item.id} className=''>
                  <Bestseller img={item.img} name={item.name} price={item.price} />
                </div>
              )}
            </div>
            <Button variant={"secondary"}>Shop All</Button>
          </div>
          <Button icon={<Right />}></Button>
        </div>
      </section>
      <section>
        <div className='bg-service_bg mb-[64px]'>
          <div className='container flex justify-between w-[800px] py-[64px] text-center'>
            {serviceData.map((item) =>
              <ServiceCard key={item.id} name={item.name} icon={item.icon} text={item.text} />
            )}
          </div>
        </div>
      </section>
      <section>
        <div className='container text-center mb-[64px]'>
          <h2 className=' text-3xl font-medium mb-[40px]'>Blogs</h2>
          <div className="w-[800px] gap-8 grid grid-cols-4 text-center ml-auto mr-auto mb-[36px]">
            {blogsData.map((item) =>
              <div key={item.id} className=''>
                <Bestseller img={item.img} name={item.name} price={item.price} />
              </div>
            )}
          </div>
          <Button variant={"secondary"}>Shop All</Button>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='flex items-center justify-center gap-3 mb-[40px]'>
            <div>
              <Instagram />
            </div>
            <h2 className='text-3xl font-semibold'>Instagram</h2>
          </div>
          <div>
            {socialData.map((item) =>
              <div key={item.id} className='flex gap-2 items-center'>
                <div className='w-[560px]'>
                  <img src={item.img1} alt="img" />
                </div>

                <div className='grid grid-cols-3 gap-2' >
                  <img src={item.img2} alt="img" />
                  <img src={item.img3} alt="img" />
                  <img src={item.img4} alt="img" />
                  <img src={item.img5} alt="img" />
                  <img src={item.img6} alt="img" />
                  <img src={item.img7} alt="img" />
                </div>
              </div>
            )}
          </div>
          <div className='text-center mt-[40px] mb-[64px]'>
            <Button variant={"secondary"}>Follow Us @beautyshop</Button>
          </div>
        </div>
      </section>
    </>
  )
}
