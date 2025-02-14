// import GirlWithABun from './Images/GirlWithABun.jsx';
// import Girl from './Images/GirlWithABun.jsx'

export default function Hero() {
    return (
      <section className="text-center py-16 bg-green-100">
        <h2 className="text-4xl font-bold text-gray-800">
          The fun way to style your wardrobe!
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Try on outfits virtually with Style Files.
        </p>
        <div>
          {/* <GirlWithABun width="50" height="50" viewBox="0 0 268.8 504.22" /> */}
        </div>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded text-lg">
          Get Started
        </button>

        {/* Inline SVG with All Fixes */}
        <div className="flex justify-center mt-8 bg-gray-300 p-4 rounded-lg"></div>

      </section>
    );
}