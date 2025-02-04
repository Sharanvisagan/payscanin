import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
    {/* Header */}
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={145} height={64} />
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-gray-600 hover:underline">For Business</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </header>
                  {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-center py-12 md:py-16 h-[400px] md:h-[600px] flex items-center"
        style={{ backgroundImage: "url('/hero-image.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      </section>
   
      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">
            Recharge and Pay Bills on Payscan
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <Feature icon="💡" title="Electricity" />
            <Feature icon="📱" title="Mobile Recharge" />
            <Feature icon="💳" title="Credit Card" />
            <Feature icon="💧" title="Water Bill" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Book and Buy on Payscan</h3>
          <div className="grid md:grid-cols-4 gap-4">
              <li className="flex items-center gap-4">🎟️ <span>Movie Tickets</span></li>
              <li className="flex items-center gap-4">🚆 <span>Train Tickets</span></li>
              <li className="flex items-center gap-4">🛒 <span>Shopping</span></li>
              <li className="flex items-center gap-4">🍔 <span>Food Delivery</span></li>
          </div>
        </div>
      </section>

      {/* Bank Integration Section */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Money in Your Bank</h3>
          <p className="text-gray-600 mb-6">
            Pay and receive money instantly using your existing bank accounts.
          </p>
          <div className='flex-box row-span-full'>
            <Image src='/Bank.png' alt='Bank' width={1280} height={961} />
          </div>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            See All Supported Banks
          </button>
        </div>
      </section>
      {/*...........*/}
       {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">
            Recharge and Pay Bills on Payscan
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <Feature icon="💡" title="Electricity" />
            <Feature icon="📱" title="Mobile Recharge" />
            <Feature icon="💳" title="Credit Card" />
            <Feature icon="💧" title="Water Bill" />
          </div>
        </div>
      </section>
      {/*...........*/}
      {/* Payscan Pay Section */}
      
      <section className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-16 text-center bg-grey-100'>
          <h3 className='text-3xl font-italic text-red-500 mb-6'>
            money made easy, by Payscan
          </h3>
          <p>Built for India with all the features and rewards you love, plus much more.</p>
          <p>Payscan Pay App is the most easiest way to send money home to your family, recharge your mobile, or pay the neighborhood stores, shop.</p>
          <br></br>
          <div className="flex justify-center">
            <Image src="/google_play.png" alt="Logo" width={145} height={64} />
            <Image src="/apple_store.png" alt="Logo" width={145} height={64} />
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Your Money is Protected</h3>
          <p className="text-gray-600 mb-6">
            Payscan protects your money with a world-class security system.
          </p>
          <Image src='/security-icon.png' alt='Bank' width={1280} height={961} />
          <br></br>
          <h4 className="mt-4 font-bold">Call for support & help 24/7 to: +91-9500061256</h4>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white-800 text-red-400 py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2025 Payscan. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
      <div className="text-4xl">{icon}</div>
      <h4 className="mt-4 font-bold">{title}</h4>
    </div>
  );
}

export default page
