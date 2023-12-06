import Slider from '@/components/molecules/slider'
import SectionTitle from '@/components/molecules/section-title'
import Image from 'next/image'
import CardClient from '../molecules/card-client'

const Clients = () => {

  return (
    <div className='my-16 container mx-auto'>
      <SectionTitle
        title='Our Clients'
        subtitle='Some of our partners and clients'
      />
      <div className='mt-12'>
        <div className='flex relative flex-col w-full justify-between'>
          <div className='w-24 h-64 hidden md:block absolute z-20 bg-white shadow-custom-shadow-left top-0 left-0'/>
          <div>
            <div className='!overflow-x-auto relative flex items-center space-x-6 py-4 w-full md:no-scrollbar'>
              
              <CardClient image='/images/flutix.svg' alt='flutix' />
              <CardClient image='/images/harwigadget.svg' alt='harwigadget' />
              <CardClient image='/images/kyoo.svg' alt='kyoo' />
              <CardClient image='/images/komerce.svg' alt='komerce' />
              <CardClient image='/images/moonton.svg' alt='moonton' />
              <CardClient image='/images/laracamp.svg' alt='laracamp' />
              <CardClient image='/images/shamo.svg' alt='shamo' />
              <CardClient image='/images/micro.svg' alt='micro' />
            </div>
            <div className='!overflow-x-auto relative flex items-center space-x-6 py-4 w-full md:no-scrollbar'>
              <CardClient image='/images/flutix.svg' alt='flutix' />
              <CardClient image='/images/harwigadget.svg' alt='harwigadget' />
              <CardClient image='/images/kyoo.svg' alt='kyoo' />
              <CardClient image='/images/komerce.svg' alt='komerce' />
              <CardClient image='/images/moonton.svg' alt='moonton' />
              <CardClient image='/images/laracamp.svg' alt='laracamp' />
              <CardClient image='/images/shamo.svg' alt='shamo' />
              <CardClient image='/images/micro.svg' alt='micro' />
            </div>
          </div>
          <div className='w-24 h-64 hidden md:block absolute z-20 bg-white shadow-custom-shadow-right top-0 right-0'/>
        </div>
      </div>
    </div>
  )
}

export default Clients
