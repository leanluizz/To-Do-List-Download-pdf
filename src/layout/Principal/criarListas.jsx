//Ui
import 'bootstrap/dist/css/bootstrap.min.css';

//Component
import Overlay from '../Overlay/overlay';
import Dropdown from '../../components/ui/Dropdown/dropdown';
import TopToolbar from './components/TopToolbar.jsx';
import TitleList from './components/TitleList.jsx';
import AddItemInput from './components/AddItemInput.jsx';

//Images
import Center from './images-icons/alinhamento-center.png';
import Start from './images-icons/alinhamento-start.png';
import End from './images-icons/alinhamento-end.png';

//React
import { useContext, useState, useEffect } from "react";
import Button from '../../components/ui/Button/button.tsx';
import IconButton from '../../components/ui/IconButton/icon-button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Icon from '../../components/ui/Icon/icon';

//JSPDF
import jsPDF from 'jspdf';

export default function CriarListas(){
    const [values, setValues] = useState('');
    const [items, setItems] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [themeColor] = useState('bg-success');
    const [textColor, setTextColor] = useState('text-dark');
    const [show, setShow] = useState(false);
    const [alignText, setAlignText] = useState('text-start');
    const [FontText, setFontText] = useState('');
    const [background, setbackground] = useState('');
    const [textSize, setTextSize] = useState(20);
    const [align, setAlign] = useState(20);
    const [title, setTitle] = useState('');
    const [reference, setreference] = useState(false)
    const [valueTitle, setValueTitle] = useState('')
    const [lastAddedIndex, setLastAddedIndex] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInput = (e) => {
        setValues(e.target.value);
    }

    useEffect(() => {
        const savedColor = localStorage.getItem('textColor');
        const savedAlign = localStorage.getItem('alignText');
        const savedFont = localStorage.getItem('FontText');
        const savedSize = localStorage.getItem('textSize');
        if (savedColor) setTextColor(savedColor);
        if (savedAlign) setAlignText(savedAlign);
        if (savedFont) setFontText(savedFont);
        if (savedSize) setTextSize(Number(savedSize));
    }, []);
    useEffect(() => {
        localStorage.setItem('textColor', textColor);
    }, [textColor]);
    useEffect(() => {
        localStorage.setItem('alignText', alignText);
    }, [alignText]);
    useEffect(() => {
        localStorage.setItem('FontText', FontText);
    }, [FontText]);
    useEffect(() => {
        localStorage.setItem('textSize', String(textSize));
    }, [textSize]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Enter') {
                if (editingIndex !== null) {
                    saveEdit();
                } else {
                    Insert();
                }
            }
        };

        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [values, editingIndex]);


    const gerarPDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
      //Adicionar imagem ao PDF
      doc.addImage(background, 'JPEG' || 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
        // Função para definir o alinhamento do texto com base na escolha do usuário
        function setAlign(align) {
          switch (alignText) {
            case 'text-center':
              return pageWidth / 2 - 20; // Centraliza na largura da página
            case 'text-start':
              return 20; // Alinha à esquerda
            case 'text-end':
              return pageWidth - 20; // Alinha à direita
            default:
              return 20; // Centraliza por padrão
          }
        }
      
        // Função para adicionar texto ao PDF com alinhamento
        function addText(item, index) {
          const alignX = setAlign(alignText); // Obtém a posição X com base no alinhamento escolhido
          const yPos = 20 + (textSize < 50 ? index * 30 : index * 50); // Posição Y, ajustável conforme necessário
          doc.text(`${item}`, alignX, yPos);
        }
      
        // Define a cor do texto com base na escolha do usuário
        switch (textColor) {
          case 'text-danger':
            doc.setTextColor(255, 0, 0); // Vermelho
            break;
          case 'text-success':
            doc.setTextColor(0, 255, 0); // Verde
            break;
          case 'text-warning':
            doc.setTextColor(255, 255, 0); // Amarelo
            break;
          case 'text-primary':
            doc.setTextColor(0, 0, 139); // Azul escuro
            break;
          case 'text-purple':
            doc.setTextColor(128, 0, 128); // Roxo
            break;
          default:
            doc.setTextColor(0, 0, 0); // Preto
            break;
        }
      
        // Configurações de fonte e tamanho
        doc.setFontSize(textSize);
      
        // Adiciona cada item da lista ao PDF
        doc.text(title, pageWidth / 2 - 20, 10)
        items.forEach((item, index) => {
          addText(item, index);
        });
        
        // Salva o documento PDF com o nome especificado
        doc.save('lista-de-itens.pdf');
      };
      

    const changeColor = (color)  => {
        setTextColor(color)
      }
    const changeAlign = (align) => {
        setAlignText(align)
    }
    const changeFont = (font) => {
        setFontText(font)
    }
    const changeSize = (event) => {
        if (event.target.value <= 50) {
            setTextSize(event.target.value)
        }else{
            return null
        }
    }
    const changeBackground = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageUrl = e.target.result;
            setbackground(imageUrl);
            console.log(imageUrl);
          };
          reader.readAsDataURL(file);
        }
      };
    const Insert = () => {
        if (values.trim()) {
            setItems([...items, values]);
            setLastAddedIndex(items.length)
            setValues('');
        }
    }

    const Delete = (indexToDelete) => {
        setItems(items.filter((_, index) => index !== indexToDelete));
    }

    const startEdit = (index) => {
        setEditingIndex(index);
        setValues(items[index]);
    }

    const saveEdit = () => {
        const updatedItems = items.map((item, index) => 
            index === editingIndex ? values : item
        );
        setItems(updatedItems);
        setEditingIndex(null);
        setValues('');
    }
    return(
        <>
        <hr />
        <TopToolbar
          changeColor={changeColor}
          changeSize={changeSize}
          changeFont={changeFont}
          changeAlign={changeAlign}
          changeBackground={changeBackground}
          gerarPDF={gerarPDF}
          textSize={textSize}
          FontText={FontText}
          alignText={alignText}
          textColor={textColor}
        />
        <section className="p-2">
            <>
            <Button variant="light" onClick={handleShow}>
      <Icon name="Bars3Icon" style="solid" size={50} className="d-lg-none p-2 text-success" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className="gradient-text">Tasks</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <section>
        <div className={`d-flex flex-column align-items-center justify-content-center bg-gradient mb-5`}>
        <Overlay 
        title={'Alterar cor da lista'}
        svg={
            <Icon name="PaintBrushIcon" style="solid" size={50} className="text-success" />
        }
        content={
            <>
            <div>
                <div onClick={() => changeColor('text-danger')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-danger' ? 'bg-success bg-opacity-10' : ''}`}>
                <Icon name="StopCircleIcon" style="solid" size={16} className="text-danger" />
                </div>

                 <div onClick={() => changeColor('text-success')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-success' ? 'bg-success bg-opacity-10' : ''}`}>
                <Icon name="StopCircleIcon" style="solid" size={16} className="text-success" />
                </div>

                 <div onClick={() => changeColor('text-primary')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-primary' ? 'bg-success bg-opacity-10' : ''}`}>
                <Icon name="StopCircleIcon" style="solid" size={16} className="text-primary" />
                </div>

                 <div onClick={() => changeColor('text-purple')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-purple' ? 'bg-success bg-opacity-10' : ''}`}>
                <Icon name="StopCircleIcon" style="solid" size={16} className="text-purple" />
                </div>

                 <div onClick={() => changeColor('text-warning')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-warning' ? 'bg-success bg-opacity-10' : ''}`}>
                <Icon name="StopCircleIcon" style="solid" size={16} className="text-warning" />
                </div>
            </div>
            </>
        }
        />
        <Overlay 
        title={'Alterar tamanho'}
        svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-alphabet-uppercase" viewBox="0 0 16 16">
  <path d="M1.226 10.88H0l2.056-6.26h1.42l2.047 6.26h-1.29l-.48-1.61H1.707l-.48 1.61ZM2.76 5.818h-.054l-.75 2.532H3.51zm3.217 5.062V4.62h2.56c1.09 0 1.808.582 1.808 1.54 0 .762-.444 1.22-1.05 1.372v.055c.736.074 1.365.587 1.365 1.528 0 1.119-.89 1.766-2.133 1.766zM7.18 5.55v1.675h.8c.812 0 1.171-.308 1.171-.853 0-.51-.328-.822-.898-.822zm0 2.537V9.95h.903c.951 0 1.342-.312 1.342-.909 0-.591-.382-.954-1.095-.954zm5.089-.711v.775c0 1.156.49 1.803 1.347 1.803.705 0 1.163-.454 1.212-1.096H16v.12C15.942 10.173 14.95 11 13.607 11c-1.648 0-2.573-1.073-2.573-2.849v-.78c0-1.775.934-2.871 2.573-2.871 1.347 0 2.34.849 2.393 2.087v.115h-1.172c-.05-.665-.516-1.156-1.212-1.156-.849 0-1.347.67-1.347 1.83"/>
</svg>
        }
        content={
            <>
            <p className="mb-2 text-muted">Máximo permitido: 50</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
              {[10,20,30,40,50].map((size) => (
                <div key={size}>
                  <input onClick={() => setTextSize(size)} type="radio" name="radioTextSize" checked={textSize === size} readOnly />
                  <p>{size}</p>
                </div>
              ))}
            </div>
            </>
        }
        />
        <Overlay 
        title={'Alterar fonte'}
        svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-alphabet" viewBox="0 0 16 16">
            <path d="M2.204 11.078c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552s.864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582m.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864m5.593.937c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86Zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401Zm2.834-1.328c0 1.47.87 2.378 2.305 2.378 1.416 0 2.139-.777 2.158-1.763h-1.186c-.06.425-.313.732-.933.732-.66 0-1.05-.512-1.05-1.352v-.625c0-.81.371-1.328 1.045-1.328.635 0 .879.425.918.776h1.187c-.02-.986-.787-1.806-2.14-1.806-1.41 0-2.304.918-2.304 2.338z"/>
            </svg>
        }
        content={
            <>
            <div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('cursive')} type="radio" name="exampleRadio" id="exampleRadio1" checked={FontText === 'cursive'} readOnly />
                <p className="mb-0 ms-2" style={{fontFamily:'cursive'}}>Cursive</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('fantasy')} type="radio" name="exampleRadio" id="exampleRadio2" checked={FontText === 'fantasy'} readOnly />
                <p className="mb-0 ms-2" style={{fontFamily:'fantasy'}}>Fantasy</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('monospace')} type="radio" name="exampleRadio" id="exampleRadio3" checked={FontText === 'monospace'} readOnly />
                <p className="mb-0 ms-2" style={{fontFamily:'monospace'}}>Monospace</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('sans-serif')} type="radio" name="exampleRadio" id="exampleRadio4" checked={FontText === 'sans-serif'} readOnly />
                <p className="mb-0 ms-2" style={{fontFamily:'sans-serif'}}>Sans-Serif</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('serif')} type="radio" name="exampleRadio" id="exampleRadio5" checked={FontText === 'serif'} readOnly />
                <p className="mb-0 ms-2" style={{fontFamily:'serif'}}>Serif</p>
            </div>
            <div className='d-flex align-items-center'>
                <input onClick={() => changeFont('italic')} type="radio" name="exampleRadio" id="exampleRadio6" checked={FontText === 'italic'} readOnly />
                <p className="mb-0 ms-2" style={{fontStyle:'italic'}}>Italic</p>
            </div>

            </div>
            </>
        }
        />
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" className="cursor-pointer bi bi-filetype-pdf" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
          </svg>
        <Overlay 
        title={'Alinhamento'}
        svg={
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" className="bi bi-list-columns" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 0 .5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 2h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 4h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 6h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-13 2a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
        </svg>
        }
        content={
            <div className='d-flex'>
                <img onClick={() => changeAlign('text-start')}  className='border border-dark rounded-1 m-2 p-1' width={50} src={Start} />
                <img onClick={() => changeAlign('text-center')} className='border border-dark rounded-1 m-2 p-1' width={50} src={Center} />
                <img onClick={() => changeAlign('text-end')} className='border border-dark rounded-1 m-2 p-1' width={50} src={End} />
            </div>
        }   
        />
        <input onChange={changeBackground} type='file' name='wallpaper' id ='wallpaper' className='d-none' />
        <label htmlFor="wallpaper">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="cursor-pointer bi bi-card-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
            </svg>
        </label>
        </div>
        </section>
        </Offcanvas.Body>
      </Offcanvas>
            </>
            <TitleList
              background={background}
              reference={reference}
              valueTitle={valueTitle}
              setValueTitle={setValueTitle}
              setTitle={setTitle}
              setreference={setreference}
              textColor={textColor}
              title={title}
              items={items}
              editingIndex={editingIndex}
              values={values}
              handleInput={handleInput}
              startEdit={startEdit}
              saveEdit={saveEdit}
              Delete={Delete}
              FontText={FontText}
              textSize={textSize}
              alignText={alignText}
              lastAddedIndex={lastAddedIndex}
              clearAddedIndex={() => setLastAddedIndex(null)}
            />
            <AddItemInput values={values} handleInput={handleInput} Insert={Insert} />
        </section>
        </>
    )
}
