import React from 'react'
import { FooterLogo } from "/public/icons/footer_logo.jsx"
import { footerHelpData, footerAboutData } from '../../../data/data'
import { Button } from '../../../components/ui/button'

export const Footer = () => {
  return (
    <div className='bg-black pt-[77px] pb-[135px]'>
      <div className='container flex justify-between'>
        <div>
          <FooterLogo />
        </div>
        <div>
          <h3 className='text-white font-semibold text-base mb-[24px]'>ABOUT</h3>
          {footerAboutData.map((item) =>
            <div key={item.id} className='block'>
              <a className="text-white text-sm opacity-80
                 mb-[8px]" href={item.path}>{item.link}</a>
            </div>
          )}
        </div>
        <div>
          <h3 className='text-white font-semibold text-base mb-[24px]'>HELP</h3>
          {footerHelpData.map((item) =>
            <div key={item.id}>
              <a className="text-white text-sm opacity-80
                 mb-[8px]" href={item.path}>{item.link}</a>
            </div>
          )}
        </div>
        <div>
          <h3 className='text-white font-semibold text-base mb-[24px]'>SUBSCRIBE</h3>
          <a className="text-white text-sm opacity-80
             mb-[16px]">Subscribe now and thank us later
          </a>
          <form className='mt-[16px]'>
            <input className='py-[10px] border border-white bg-black w-[248px]' type="text" />
            <Button variant={"footer"}>Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
