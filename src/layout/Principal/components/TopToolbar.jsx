import Dropdown from '../../../components/ui/Dropdown/dropdown';
import Icon from '../../../components/ui/Icon/icon';
import Center from '../images-icons/alinhamento-center.png';
import Start from '../images-icons/alinhamento-start.png';
import End from '../images-icons/alinhamento-end.png';
import IconButton from '../../../components/ui/IconButton/icon-button';

export default function TopToolbar({
  changeColor,
  changeSize,
  changeFont,
  changeAlign,
  changeBackground,
  gerarPDF,
  textSize,
  FontText,
  alignText,
  textColor,
}) {
  return (
    <section>
      <div className="d-none d-lg-flex align-items-center justify-content-around gap-4 bg-gradient border border-1 border-success">
        <Dropdown
          title={'Alterar cor da lista'}
          buttonTitle={'Alterar cor da lista'}
          icon={<Icon name="PaintBrushIcon" size={25} className="text-success" />}
          placement={'bottom'}
          panelStyle={{ minWidth: 150 }}
          content={
            <>
              <div>
                <div onClick={() => changeColor('text-danger')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-danger' ? 'bg-success bg-opacity-10' : ''}`}>
                  <Icon name="StopCircleIcon" size={16} className="text-danger" />
                </div>
                <div onClick={() => changeColor('text-success')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-success' ? 'bg-success bg-opacity-10' : ''}`}>
                  <Icon name="StopCircleIcon" size={16} className="text-success" />
                </div>
                <div onClick={() => changeColor('text-primary')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-primary' ? 'bg-success bg-opacity-10' : ''}`}>
                  <Icon name="StopCircleIcon" size={16} className="text-primary" />
                </div>
                <div onClick={() => changeColor('text-purple')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-purple' ? 'bg-success bg-opacity-10' : ''}`}>
                  <Icon name="StopCircleIcon" size={16} className="text-purple" />
                </div>
                <div onClick={() => changeColor('text-warning')} className={`cursor-pointer p-3 text-center rounded-2 ${textColor === 'text-warning' ? 'bg-success bg-opacity-10' : ''}`}>
                  <Icon name="StopCircleIcon" size={16} className="text-warning" />
                </div>
              </div>
            </>
          }
        />
        <Dropdown
          title={'Alterar tamanho'}
          buttonTitle={'Alterar tamanho'}
          icon={<Icon name="ArrowsUpDownIcon" size={25} className="text-success" />}
          placement={'bottom'}
          content={
            <div className="d-flex flex-column gap-2">
              <input onChange={changeSize} placeholder="0" type="number" min={10} max={50} value={textSize} className="form-control" style={{ borderRadius: 6 }} />
              <span className="text-muted">Máximo: 50</span>
            </div>
          }
        />
        <Dropdown
          title={'Alterar fonte'}
          buttonTitle={'Alterar fonte'}
          icon={<Icon name="DocumentTextIcon" size={25} className="text-success" />}
          placement={'bottom'}
          content={
            <>
              <div>
                <div className="d-flex align-items-center cursor-pointer">
                  <input onClick={() => changeFont('cursive')} type="radio" name="exampleRadio" id="exampleRadio1" checked={FontText === 'cursive'} readOnly />
                  <p className="mb-0 ms-2" style={{ fontFamily: 'cursive' }}>
                    Cursive
                  </p>
                </div>
                <div className="d-flex align-items-center cursor-pointer">
                  <input onClick={() => changeFont('fantasy')} type="radio" name="exampleRadio" id="exampleRadio2" checked={FontText === 'fantasy'} readOnly />
                  <p className="mb-0 ms-2" style={{ fontFamily: 'fantasy' }}>
                    Fantasy
                  </p>
                </div>
                <div className="d-flex align-items-center cursor-pointer">
                  <input onClick={() => changeFont('monospace')} type="radio" name="exampleRadio" id="exampleRadio3" checked={FontText === 'monospace'} readOnly />
                  <p className="mb-0 ms-2" style={{ fontFamily: 'monospace' }}>
                    Monospace
                  </p>
                </div>
                <div className="d-flex align-items-center cursor-pointer">
                  <input onClick={() => changeFont('sans-serif')} type="radio" name="exampleRadio" id="exampleRadio4" checked={FontText === 'sans-serif'} readOnly />
                  <p className="mb-0 ms-2" style={{ fontFamily: 'sans-serif' }}>
                    Sans-Serif
                  </p>
                </div>
                <div className="d-flex align-items-center cursor-pointer">
                  <input onClick={() => changeFont('serif')} type="radio" name="exampleRadio" id="exampleRadio5" checked={FontText === 'serif'} readOnly />
                  <p className="mb-0 ms-2" style={{ fontFamily: 'serif' }}>
                    Serif
                  </p>
                </div>
                <div className="d-flex align-items-center cursor-pointer">
                  <input onClick={() => changeFont('italic')} type="radio" name="exampleRadio" id="exampleRadio6" checked={FontText === 'italic'} readOnly />
                  <p className="mb-0 ms-2" style={{ fontStyle: 'italic' }}>
                    Italic
                  </p>
                </div>
              </div>
            </>
          }
        />
        <IconButton style='outline' title='Gerar PDF' onClick={gerarPDF} name="DocumentArrowDownIcon" size={25} className="text-success cursor-pointer d-inline-flex align-items-center justify-content-center" />
        <Dropdown
          title={'Alinhamento'}
          buttonTitle={'Alinhamento'}
          icon={<Icon name="ListBulletIcon" size={25} className="text-success" />}
          placement="bottom"
          content={
            <div className="d-flex">
              <img onClick={() => changeAlign('text-start')} className={`border rounded-1 m-2 p-1 cursor-pointer ${alignText === 'text-start' ? 'border-success' : 'border-dark'}`} width={50} src={Start} />
              <img onClick={() => changeAlign('text-center')} className={`border rounded-1 m-2 p-1 cursor-pointer ${alignText === 'text-center' ? 'border-success' : 'border-dark'}`} width={50} src={Center} />
              <img onClick={() => changeAlign('text-end')} className={`border rounded-1 m-2 p-1 cursor-pointer ${alignText === 'text-end' ? 'border-success' : 'border-dark'}`} width={50} src={End} />
            </div>
          }
        />
        <input onChange={changeBackground} type="file" name="wallpaper" id="wallpaper" className="d-none" />
        <label htmlFor="wallpaper" className="d-inline-flex align-items-center justify-content-center">
          <Icon name="PhotoIcon" size={25} className="text-success cursor-pointer d-inline-flex align-items-center justify-content-center" />
        </label>
      </div>
    </section>
  );
}
