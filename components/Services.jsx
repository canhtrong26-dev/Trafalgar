import Image from "next/image";

export default function Services() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 pt-20">
      <h2 className="font-[Mulish] font-bold text-3xl">Our services</h2>
<hr className="w-50 h-3 "/>
      <p className="max-w-200 text-center ">We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
     
      <div className=" flex just-center items-center  grid grid-cols-3 gap-y-12 gap-15">


   
        <div className="bg-white p-5 rounded-xl">
          <Image className="pb-15 pt-2 pl-2" src="/images/search-doctor.png" alt="search doctor" width={60} height={60} />
          <h3 className='font-bold pb-5'>Search doctor</h3>
          <p className="text-sm text-gray-500 w-50">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
        </div>

        
        <div className="bg-white p-5 rounded-xl">
          <Image className="pb-15 pt-2 pl-2" src="/images/online-pharmacy.png" alt="online pharmacy" width={60} height={60} />
          <h3 className='font-bold pb-5'>Online pharmacy</h3>
          <p className="text-sm text-gray-500 w-50">Buy your medicines with our mobile application with a simple delivery system</p>
        </div>

        
        <div className="bg-white p-5 rounded-xl">
          <Image className="pb-15 pt-2 pl-2" src="/images/consultation.png" alt="consultation" width={60} height={60} />
          <h3 className='font-bold pb-5'>Consultation</h3>
          <p className="text-sm text-gray-500 w-50">Free consultation with our trusted doctors and get the best recommendations</p>
        </div>

        
        <div className="bg-white p-5 rounded-xl">
          <Image className="pb-15 pt-2 pl-2" src="/images/details-info.png" alt="details info" width={60} height={60} />
          <h3 className='font-bold pb-5'>Details info</h3>
          <p className="text-sm text-gray-500 w-50">Free consultation with our trusted doctors and get the best recommendations</p>
        </div>



       
        <div className="bg-white p-5 rounded-xl">
          <Image className="pb-15 pt-2 pl-2" src="/images/emergency-care.png" alt="emergency care" width={60} height={60} />
          <h3 className='font-bold pb-5'>Emergency care</h3>
          <p className="text-sm text-gray-500 w-50">You can get 24/7 urgent care for yourself or your children and your lovely family</p>
        </div>

        
        <div className="bg-white p-5 rounded-xl">
          <Image className="pb-15 pt-2 pl-2" src="/images/tracking.png" alt="tracking" width={60} height={60} />
          <h3 className='font-bold pb-5'>Tracking</h3>
          <p className="text-sm text-gray-500 w-50">Track and save your medical history and health data</p>
        </div>
      </div>
    </section>
  );
}