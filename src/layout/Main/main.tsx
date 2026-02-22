import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Intro from '../Main/Introducao/intro';
import Explain from '../Main/Explicacao/explain';
import Example from '../Main/Explicacao/example';
import Faq from '../Main/Duvidas/faq';
import About from '../Main/Sobre/about';
import Highlights from '../Main/Destaques/highlights';
import ScrollTopButton from '../../components/ui/ScrollTopButton/scroll-top-button';
export default function Main(){
    return (
        <main style={{gap:'200px'}} className="d-flex flex-column">
        <div className="mt-5 pt-3">
          <Intro />
        </div>
        <Explain />
        <Highlights />
        <Example />
        <Faq />
        <About />
        <ScrollTopButton threshold={400} />
        </main>
    )
}
