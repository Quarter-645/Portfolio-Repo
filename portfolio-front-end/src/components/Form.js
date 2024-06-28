import FormCard from './FormCard';
import Witch from '../images/characters/Witch Charge Crop.gif';
import Warrior from '../images/characters/Sword Animation Crop.gif';
import Archer from '../images/characters/Red Hood Crop.gif';

const RedCSSOffset = "mt-20"

function Form() {
  return (
    <section id="form" className="relative flex items-center justify-center min-h-screen">
        <FormCard />
    </section>
  );
}

export default Form;
