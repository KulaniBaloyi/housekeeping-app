import Image from "next/image";
import Landing from "./Components/Landing";
import Section from "./Components/Section";
import ContactMeSection from "./Components/contactme-section";

export default function Home() {
  return (
    <>
      <Landing/>
      <Section/>
      <ContactMeSection/>
    </>
  );
}
