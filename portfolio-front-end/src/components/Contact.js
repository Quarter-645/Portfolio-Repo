import ContactCard from "./ContactCard";
import FormCard from './FormCard';

function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen">
            <FormCard />
            <ContactCard/>
        </section>
    );
  }
  
  export default Contact;
  