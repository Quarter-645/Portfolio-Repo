import ProfilePicture from "../images/ProfilePicture.jfif";
import Typewriter from "./TypeWriter";

function Home() {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-grey">
      <div className="bg-lightGrey p-8 rounded-lg shadow-lg flex items-center">
        <img
          src={ProfilePicture}
          alt="Picture of Connor Morrison"
          className="rounded-full w-48 h-48 mr-4"
        />
        <div>
          <h3 className="text-xl text-black">Hi I'm</h3>
          <h1 className="text-3xl font-bold text-black">Connor Morrison</h1>
          <Typewriter />
        </div>
      </div>
    </section>
  );
}

export default Home;
