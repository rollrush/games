import "./App.css";

function App() {
  return (
    <>
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Rollrush</div>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#games" className="hover:text-gray-400">Games</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-[4.75rem] lg:pt-[6.25rem] overflow-hidden bg-gray-800 text-white min-h-screen">
        <section id="home" className="container mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">Welcome to Rollrush</h1>
          <p className="text-lg">Your gateway to decentralized gaming. Play, compete, and win!</p>
        </section>

        <section id="about" className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6">About Rollrush</h2>
          <p className="text-lg">
            Rollrush brings life-like decentralized games using blockchain technology. Experience secure, decentralized, and fun gameplay.
          </p>
        </section>

        <section id="games" className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6">Our Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Dice Up</h3>
              <p>A classic dice rolling game with a twist.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Roll Up</h3>
              <p>Roll your way to victory in this strategic board game.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Magnetic Chess</h3>
              <p>A unique twist on chess with magnetic interactions.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
