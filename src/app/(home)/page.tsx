import DonateSlider from '@/components/DonateSlider';
import StatusBox from '@/components/StatusBox/StatusBox';

export default function home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex relative min-h-full translate-y-1/4 top-1/4 p-4 ">
        <div className="hero md:w-2/3 ">
          <h1 className="font-anton text-9xl text-primary-dark">
            Donate Your Money to Rebuild Future
          </h1>
        </div>
        <div className='md:w-1/3'>
          <DonateSlider />
        </div>
      </div>

      {/* flotingSection */}
      <section className="block absolute left-0 right-0 m-auto top-[55%] rounded-[59px] bg-primary-dark h-screen w-[98%] ">


        <h1 className="font-anton text-7xl text-grey m-5 p-4">
          Our Ongoing Campaigns
        </h1>
        <div className="mt-2 flex">
          <StatusBox title={'Active Volunteer'} value={'427+'} />
          <StatusBox
            title={'Total'}
            value={'3892$+'}
            // varient={{ mode: 'light' }}
          />
        </div>
      </section>
    </div>
  );
}
