import React from 'react';
import noteImage from '../assets/images/noteimage.png';

const AboutPage = () => {
  const paragraphStyle = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
  };

  const BricolageGrotesque = {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 500,
    fontSize: '65px',
  };

  const BricolageGrotesqueSmall = {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 500,
    fontSize: '20px', // Font size for smaller screens
  };

  const BricolageGrotesques = {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 500,
    fontSize: '20px',
  };
  
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header Section */}
      {/* <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold" >Note Management</h1>
                    
                </div>
            </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4" style={BricolageGrotesque}>
            MEMOMATE
          </h2>
          <p className="text-xl mb-8">
            Your ultimate solution for organizing and managing notes effortlessly
          </p>
          {/* <p className="text-lg mb-4">
            Welcome to Note Management, your number one solution for organizing
            and managing your notes efficiently. Whether you are a student,
            professional, or simply someone who loves to jot down ideas, Note
            Management is here to help.
          </p> */}
        </div>
        <div style={{ height: '30px' }}></div>
        <img
          src={noteImage}
          alt="Note Image"
          className="object-cover mb-4 max-h-full max-w-full relative z-10 rounded-lg animate-brightness animate-float"
          style={{
            height: '39rem',
            width: '20rem',
            display: 'block',
            margin: 'auto',
            filter: 'drop-shadow(0px 10px 20px rgba(139, 92, 229, 0.8))',
            animation: 'float 3s ease-in-out infinite',
          }}
        />
      </section>

      {/* Main Content */}
      <main className="container">
        {/* About Section */}
        <section className="mb-12">
          {/* <h2 className="text-4xl font-bold mb-4" style={paragraphStyle}>About Us</h2> */}

          {/* <p className="text-lg">
                        Our mission is to help you capture your thoughts, ideas, and important information in a seamless and accessible manner.
                    </p> */}
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative bg-black p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                {/* Black outline effect */}
                <div className="absolute inset-0 rounded-lg border-4 border-black"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center border border-silver rounded-lg p-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-100">
                    Easy-to-use Interface
                  </h3>
                  <p className="text-lg text-gray-300">
                    A clean and intuitive interface to manage your notes effortlessly.
                  </p>
                </div>
              </div>

              <div className="relative bg-black p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                {/* Black outline effect */}
                <div className="absolute inset-0 rounded-lg border-4 border-black"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center border border-silver rounded-lg p-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-100">
                    Sync Across Devices
                  </h3>
                  <p className="text-lg text-gray-300">
                    Access your notes on any device, anytime, anywhere.
                  </p>
                </div>
              </div>

              <div className="relative bg-black p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                {/* Black outline effect */}
                <div className="absolute inset-0 rounded-lg border-4 border-black"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center border border-silver rounded-lg p-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-100">
                    Secure and Private
                  </h3>
                  <p className="text-lg text-gray-300">
                    Your notes are encrypted and secure, ensuring privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div style={{ height: '30px' }}></div>
      {/* Footer Section */}
    </div>
  );
};

export default AboutPage;
