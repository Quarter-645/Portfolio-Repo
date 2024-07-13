import ProfilePicture from "../images/ProfilePicture.jfif";
import Typewriter from "./TypeWriter";

function Home() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen">
      <div className="bg-grey p-8 rounded-lg flex items-center m-4">
        <img
          src={ProfilePicture}
          alt="Picture of Connor Morrison"
          className="rounded-full w-48 h-48 mr-4"
        />
        <div>
          <h3 className="text-xl text-white">Hi I'm</h3>
          <h1 className="text-4xl font-bold text-white">Connor Morrison</h1>
          <Typewriter />
        </div>
      </div>
    </section>
  );
}

export default Home;
