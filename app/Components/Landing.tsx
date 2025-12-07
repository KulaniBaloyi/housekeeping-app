// 1. Define the TypeScript Interface for the StatCard's props
interface StatCardProps {
  label: string;
  value: string;
  description: string;
}

// 2. Apply the interface to the component parameters
const StatCard = ({ label, value, description }: StatCardProps) => (
  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
    <div className="text-4xl font-extrabold text-emerald-400 mb-1">{value}</div>
    <div className="text-sm font-semibold uppercase tracking-wider text-gray-300">{label}</div>
    <p className="text-xs text-gray-400 mt-1">{description}</p>
  </div>
);

const Landing = () => {
  // Use the path as a standard JavaScript string variable
  const heroImagePath = '/good-days-digital-Vra_DPrrBlE-unsplash.jpg';

  return (
    <section 
      // 🟢 Image Fix: Setting background-image via the 'style' prop avoids CSS compilation errors.
      style={{ backgroundImage: `url('${heroImagePath}')` }}
      
      className={`
        h-[95vh] relative flex flex-col pt-14 pb-36 
        bg-cover bg-center bg-no-repeat 
      `}
    >
      
      {/* 1. Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* 2. Main Content Wrapper: flex-grow pushes content to the bottom (end) */}
      <div className='flex-grow flex flex-col justify-end relative z-10 p-8'>
        
        {/* The 2-Column Hero Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full'>
          
          {/* LEFT COLUMN: Headline, Paragraph, and CTA */}
          <div className="flex flex-col justify-end">
            
            <p className="text-sm uppercase tracking-widest text-emerald-400 mb-2">
              REAL-TIME PROPERTY LOGISTICS
            </p>
            
            <h1 className="text-5xl font-extrabold leading-tight text-white">
              Eliminate Guesswork. <span className="text-emerald-400">Guarantee Accountability.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mt-4 max-w-lg">
              Reduce guest refunds and maintenance disputes with GPS-verified check-ins, room-by-room photo reports, and instant incident flagging.
            </p>
            
            <a href="#demo" className="w-fit">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 px-8 rounded-lg mt-8 shadow-2xl transition duration-300">
                Book a Free Demo
              </button>
            </a>
          </div>

          {/* RIGHT COLUMN: Statistics and Feature Highlights */}
          <div className="flex flex-col space-y-4 justify-end">
            
            <StatCard 
              value="85%" 
              label="Disputes Reduced" 
              description="Guest complaints resolved instantly with verified, time-stamped photo reports."
            />
            
            <StatCard 
              value="15 min" 
              label="Time Saved Per Clean" 
              description="Optimized checklists and incident reports streamline communication and follow-up."
            />
            
            <StatCard 
              value="20+" 
              label="Properties Tracked" 
              description="Real-time status updates and unified reporting for your entire portfolio."
            />
          </div>
        </div>
      </div>

      {/* 4. Sponsor Bar: The trust bar remains at the bottom */}
      <div className='absolute h-20 left-0 right-0 bottom-0  flex items-center justify-center z-10 text-white bg-black/50'>
        Trusted by leading property managers for reliability and reduced disputes.
      </div>
    </section>
  )
}

export default Landing;