export default function Nav(){
  function scrollToSection(section: string) {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: 'smooth' });
}

    return(
        <nav className="position-sticky top-0 z-3">
        <ul className="d-none d-lg-flex items-center" typeof="none">
          <a onClick={() => scrollToSection('tutorial')} className="link-underline link-underline-opacity-0 cursor-pointer"><li className="gradient-text pe-5">Como usar</li></a>
          <a onClick={() => scrollToSection('faq')} className="link-underline link-underline-opacity-0 cursor-pointer"><li className="gradient-text pe-5">Ajuda</li></a>
          <a href="/criar" className="link-underline link-underline-opacity-0 cursor-pointer"><li className="gradient-text pe-5">Criar lista</li></a>
        </ul>
      </nav>
    )
}
