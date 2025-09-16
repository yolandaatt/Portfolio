import { Link } from "react-router-dom";
import profileImg from "../assets/profileImg.jpg"

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-gray-100">
            <div>
                <img
                src={profileImg}
                alt="Profilbild"
                className="rounden-full w-48 h-48 object-cover shadow-lg mx-auto"
                />
            </div>
            <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hej, jag heter <span className="text-blue-600">Yolanda</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
                Fullstackutvecklare med fokus på: lägg till här
            </h2>
            <p className="max-w-xl text-gray-600 mb-8">
                INTRO
            </p>
            <div className="flex gap-4">
                <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                Se Projekt
                </Link>
                <Link to="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Kontakta mig
                </Link>
            </div>
        </div>
        </section>
    )
};

export default Hero;