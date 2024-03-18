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
        <div>donate slider</div>
      </div>

      {/* flotingSection */}
      <section className="block absolute left-0 right-0 m-auto top-[55%] rounded-[59px] bg-primary-dark h-screen w-[98%] ">
        <div className="min-h-6 mb-0.5 flex items-center">
          <input
            id="remember"
            className="rounded-10 duration-300 ease-in-out after:rounded-circle after:shadow-2xl after:duration-300 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
            type="checkbox"
          />
          <label
            htmlFor="remember"
            className="inline-block pl-3 mb-0 ml-0 font-normal cursor-pointer select-none text-sm text-slate-700"
          >
            Remember me
          </label>
        </div>

        <h1 className="font-anton text-7xl text-grey m-5 p-4">
          Our Ongoing Campaigns
        </h1>
        <div className="mt-2 flex">
          <StatusBox title={'Active Volunteer'} value={'427+'} />
          <StatusBox
            title={'Total'}
            value={'3892$+'}
            varient={{ mode: 'light' }}
          />
        </div>
      </section>
    </div>
  );
}
