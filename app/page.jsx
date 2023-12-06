import Clients from '@/components/organisms/clients'
import Goals from '@/components/organisms/goals'
import MainSection from '@/components/organisms/main-section'
import Services from '@/components/organisms/services'
import Works from '@/components/organisms/works'

export default function Home() {
  return (
    <main className='flex flex-col md:gap-y-24 gap-y-8'>
      <MainSection/>
      <Goals/>
      <Services/>
      <Works/>
      <Clients/>
    </main>
  )
}
