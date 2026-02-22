import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Intro from './introducao/intro';
import Explain from './explicacao/explain';
import Example from './explicacao/example';
import Faq from './duvidas/faq';
import About from './sobre/about';
import Highlights from './destaques/highlights';
import ScrollTopButton from '../../components/ui/scrollTopButton/scroll-top-button';
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
