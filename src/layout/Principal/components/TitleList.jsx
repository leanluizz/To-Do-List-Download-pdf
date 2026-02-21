import IconButton from '../../../components/ui/IconButton/icon-button';
import Icon from '../../../components/ui/Icon/icon';
import 'animate.css';
import 'animate.css';
export default function TitleList({
  background,
  reference,
  valueTitle,
  setValueTitle,
  setTitle,
  setreference,
  textColor,
  title,
  items,
  editingIndex,
  values,
  handleInput,
  startEdit,
  saveEdit,
  Delete,
  FontText,
  textSize,
  alignText,
  lastAddedIndex,
  clearAddedIndex,
}) {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="overflow-auto rounded-3 m-auto w-10 alturaSeis">
      <ul className="px-5">
        {!reference ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const trimmed = valueTitle.trim();
              setTitle(trimmed);
              if (trimmed.length >= 2) {
                setreference(true);
              }
            }}
            className="d-flex align-items-center gap-2 w-100 mb-5"
          >
            <div className="d-flex align-items-center gap-2 w-100">
              <input
                onChange={(e) => setValueTitle(e.target.value)}
                className="form-control flex-grow-1"
                type="text"
                placeholder="Novo título de 2 letras no mínimo"
              />
              <IconButton type="submit" variant="success" name="CheckCircleIcon" style="solid" size={24} className="flex-shrink-0" ariaLabel="Enviar título" />
            </div>
          </form>
        ) : (
          <div className="d-flex align-items-center gap-2 w-100 mb-5">
            <h1 className={`${textColor} flex-grow-1`}>{title}</h1>
            <IconButton onClick={() => setreference(false)} variant="success" name="PencilSquareIcon" style="solid" size={20} className="flex-shrink-0" ariaLabel="Editar título" />
          </div>
        )}
        {items.map((item, index) => (
          <li className={`p-2 d-flex justify-content-between border-bottom ${index === lastAddedIndex ? 'animate__animated animate__fadeIn' : ''}`} key={index} onAnimationEnd={() => index === lastAddedIndex && clearAddedIndex()}>
            {editingIndex === index ? (
              <input value={values} onChange={handleInput} className="me-1 form-control" />
            ) : (
              <p style={{ fontFamily: FontText, fontStyle: FontText, fontSize: `${textSize}px` }} className={`${textColor} ${alignText} flex-grow-1 ms-3 item`}>
                {item}
              </p>
            )}

            <div className="d-flex align-items-center gap-2">
              {editingIndex === index ? (
                <IconButton onClick={saveEdit} bare name="CheckCircleIcon" style="solid" size={30} className="rounded-1 border-0 outline-0 text-success func p-1" ariaLabel="Salvar edição" />
              ) : (
                <>
                  <IconButton onClick={() => Delete(index)} bare name="TrashIcon" style="solid" size={18} className="rounded-1 border-0 outline-0 text-danger func rounded-2 p-1" ariaLabel="Excluir item" />
                  <IconButton onClick={() => startEdit(index)} variant="success" name="PencilSquareIcon" style="solid" size={18} className="rounded-1 border-0 outline-0 text-white func rounded-2 p-1" ariaLabel="Editar item" />
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
