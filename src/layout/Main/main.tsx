import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Intro from './Introducao/intro';
import Explain from './Explicacao/explain';
import Example from './Explicacao/example';
import Faq from './Duvidas/faq';
import About from './Sobre/about';
import Highlights from './Destaques/highlights';
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
