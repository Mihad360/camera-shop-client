
const Banner = () => {
    return (
        <div className="relative h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            {/* Background image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('https://i.ibb.co/dg5grP1/vintage-photo-cameras-composition.jpg')`, filter: 'brightness(0.6)' }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6 bg-black/60">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
                    Capture Timeless Moments
                </h1>
                <p className="text-lg md:text-2xl mt-4 mb-8 font-light max-w-3xl">
                    Explore our collection of vintage and modern cameras to preserve your memories in style.
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                    Browse Cameras
                </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-50 animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-28 h-28 bg-teal-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        </div>
    );
};

export default Banner;