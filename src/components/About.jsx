import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I’m a passionate front-end developer with a flair for creative
            design and implementation. I thrive on transforming beautiful ideas
            into stunning realities, blending aesthetics with functionality.
            Beyond coding, I channel my creativity into home design and general
            decorations, where my keen eye for detail ensures every project is
            both visually captivating and meticulously crafted.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
