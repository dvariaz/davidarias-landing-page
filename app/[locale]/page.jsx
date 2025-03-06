//Views
import HomeSection from "@/modules/home/containers/HomeSection";
import AboutMeSection from "@/modules/about-me/containers/AboutMeSection";
import ProjectsSection from "@/modules/projects/containers/ProjectsSection";
import MyStorySection from "@/modules/my-story/containers/MyStorySection";
import SkillsSection from "@/modules/skills/containers/SkillsSection";
import StudiesSection from "@/modules/studies/containers/StudiesSection";
import ContactSection from "@/modules/contact/containers/ContactSection";

export const metadata = {
  title: 'David Arias | Creative coder',
  description: 'Desarrollador Front-end 👨‍💻 y UI Designer 👨‍🎨. Construyo experiencias de alta calidad y atractivas para tus usuarios. ¿Quieres darle un look fantástico a tus ideas? Entra aquí',
  keywords: 'Desarrollo Front-end,Desarrollo Frontend,Desarrollador frontend,Desarrollador front-end,Desarrollador React,Desarrollador React.js,React.js,Frontend,Front-end,Diseño web,Diseño de sitios web,Diseño de paginas web,UI,UX,Motion Graphics,Animacion,Colombia,Desarrollador Colombia,Desarrollo experiencias interactivas',
  'og:title': 'David Arias - Creative Coder',
  'og:type': 'website',
  'og:site_name': 'Desarrollador Front-end 👨‍💻 y UI Designer 👨‍🎨, apasionado por el arte y la forma en que se aplica al mundo de la tecnología.',
  'og:image': 'https://luisdavidarias.com/assets/cards/davidarias_card_web.jpg',
  'twitter:card': 'summary_large_image',
  'twitter:title': 'David Arias - Creative Coder',
  'twitter:description': 'Desarrollador Front-end 👨‍💻 y UI Designer 👨‍🎨. Construyo experiencias de alta calidad y atractivas para tus usuarios.',
  'twitter:site': '@dvariaz',
  'twitter:creator': '@dvariaz',
  'twitter:image': 'https://luisdavidarias.com/assets/cards/davidarias_card_web.jpg',
  robots: 'INDEX,FOLLOW,ARCHIVE'
}

const IndexPage = async () => {
  return (
    <>
      <HomeSection id="index" />
      <AboutMeSection />
      <ProjectsSection id="projects" />
      <MyStorySection id="about-me" />
      <SkillsSection />
      <StudiesSection id="education" />
      <ContactSection id="contact" />
    </>
  )
}

export default IndexPage