import SectionTitle from '../molecules/section-title'
import CardServices from '../molecules/card-services'

const Services = () => {
  return (
    <div className='pb-16 pt-32 container mx-auto'>
      <SectionTitle
        title='Our Services'
        subtitle='Meet the professionals'
      />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-12 md:gap-y-12 md:gap-x-8 mt-12'>
        <CardServices
          image='/images/vector-development.svg'
          alt='vector-development'
          icon='/images/icon-development.svg'
          title='Development'
          description='Turning ideas into real digital products is a valid indicator that beautiful designs can be created and implemented.'
        />
        <CardServices
          image='/images/vector-brand-identity.svg'
          alt='vector-brand-identity'
          icon='/images/icon-brand-identity.svg'
          title='Brand Identity'
          description='Through branding, the company will have strong awareness, so that consumers can easily identify and remember the brand.'
        />
        <CardServices
          image='/images/vector-product-design.svg'
          alt='vector-product-design'
          icon='/images/icon-product-design.svg'
          title='Product Design'
          description='Designing interfaces by imagining, creating, and iterating products that solve user problems or meet specific needs.'
        />
      </div>
    </div>
  )
}

export default Services
