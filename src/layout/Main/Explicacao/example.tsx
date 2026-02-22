import GridVideos from './gridVideos/gridvideos';
import Button from '../../../components/ui/Button/button';
export default function Example (){
    return(
        <section className='z-0' id='tutorial'>
            <GridVideos />
            <div className='p-4 mt-5 text-start bg-dark d-lg-flex align-items-center justify-content-center'>
                <h2 className='text-light p-5 m-lg-5 fs-5'>Agora que entendeu como funciona, clique no botão e crie sua lista.</h2>
                <a className='text-decoration-none' target='__blank' href='/criar'>
                <Button className='d-block m-auto btn btn-success w-lg-25 fs-5'>Criar lista</Button>
                </a>
            </div>
        </section>
    )
}
