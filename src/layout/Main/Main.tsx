import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Intro from './Introduction/Intro';
import Explain from './Explanation/Explain';
import Example from './Explanation/Example';
import Faq from './FAQ/Faq';
import About from './About/About';
import Highlights from './Highlights/Highlights';
import ScrollTopButton from '../../components/ui/ScrollTopButton/ScrollTopButton';
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
