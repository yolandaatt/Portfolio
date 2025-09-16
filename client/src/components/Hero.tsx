import { Link } from 'react-router-dom';
import profileImg from '../assets/profileImg.jpg';

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4 text-center">
      <div>
        <img
          src={profileImg}
          alt="Profilbild"
          className="rounden-full mx-auto h-48 w-48 object-cover shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Hej, jag heter <span className="text-blue-600">Yolanda</span>
        </h1>
        <h2 className="mb-6 text-xl text-gray-700 md:text-2xl">
          Fullstackutvecklare med fokus på: lägg till här
        </h2>
        <p className="mb-8 max-w-xl text-gray-600">INTRO</p>
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700"
          >
            Se Projekt
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-50"
          >
            Kontakta mig
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
