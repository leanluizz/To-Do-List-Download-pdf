import IconButton from '../../../components/ui/IconButton/icon-button';
import Icon from '../../../components/ui/Icon/Icon';
import 'animate.css';
import 'animate.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
interface TitleListProps {
  background: string;
  reference: boolean;
  valueTitle: string;
  setValueTitle: (v: string) => void;
  setTitle: (v: string) => void;
  setReference: (v: boolean) => void;
  textColor: string;
  title: string;
  items: string[];
  editingIndex: number | null;
  value: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  startEdit: (index: number) => void;
  saveEdit: () => void;
  deleteItem: (index: number) => void;
  fontText: string;
  textSize: number;
  alignText: string;
  lastAddedIndex: number | null;
  clearAddedIndex: () => void;
  clearingAll: boolean;
  onClearAllDone?: () => void;
  deleteLastTick: number;
}
export default function TitleList({
  background,
  reference,
  valueTitle,
  setValueTitle,
  setTitle,
  setReference,
  textColor,
  title,
  items,
  editingIndex,
  value,
  handleInput,
  startEdit,
  saveEdit,
  deleteItem,
  fontText,
  textSize,
  alignText,
  lastAddedIndex,
  clearAddedIndex,
  clearingAll,
  onClearAllDone,
  deleteLastTick,
}: TitleListProps) {
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
  const finishedClearCount = useRef(0);
  useEffect(() => {
    if (clearingAll) {
      finishedClearCount.current = 0;
    }
  }, [clearingAll, items.length]);
  useEffect(() => {
    if (!deleteLastTick) return;
    if (items.length === 0) return;
    setDeletingIndex(items.length - 1);
  }, [deleteLastTick, items.length]);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
      className="rounded-3 m-auto w-10 alturaSeis"
    >
      <ul className="px-5 pb-5">
        {!reference ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const trimmed = valueTitle.trim();
              setTitle(trimmed);
              if (trimmed.length >= 2) {
                setReference(true);
              }
            }}
            className="position-sticky top-0 bg-white d-flex align-items-center gap-2 w-100 mb-5"
            style={{ zIndex: 1 }}
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
          <div className="position-sticky top-0 bg-white d-flex align-items-center gap-2 w-100 mb-5" style={{ zIndex: 1 }}>
            <h1 className={`${textColor} flex-grow-1`}>{title}</h1>
            <IconButton onClick={() => setReference(false)} variant="success" name="PencilSquareIcon" style="solid" size={20} className="flex-shrink-0" ariaLabel="Editar título" />
          </div>
        )}
        {items.map((item, index) => (
          <li
            className={`p-2 d-flex justify-content-between border-bottom ${
              clearingAll
                ? 'animate__animated animate__fadeOut'
                : index === lastAddedIndex
                ? 'animate__animated animate__fadeIn'
                : ''
            } ${index === deletingIndex && !clearingAll ? 'animate__animated animate__fadeOut' : ''}`}
            key={index}
            onAnimationEnd={() => {
              if (index === lastAddedIndex) clearAddedIndex();
              if (clearingAll) {
                finishedClearCount.current += 1;
                if (finishedClearCount.current >= items.length) {
                  onClearAllDone && onClearAllDone();
                }
                return;
              }
              if (index === deletingIndex) {
                deleteItem(index);
                setDeletingIndex(null);
              }
            }}
          >
            {editingIndex === index ? (
              <input value={value} onChange={handleInput} className="me-1 form-control" />
            ) : (
              <p
                style={{
                  fontFamily: fontText,
                  fontStyle: fontText,
                  fontSize: `${textSize}px`,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  whiteSpace: 'normal',
                }}
                className={`${textColor} ${alignText} flex-grow-1 ms-3 item text-break`}
              >
                {item}
              </p>
            )}

            <div className="d-flex align-items-center gap-2">
              {editingIndex === index ? (
                <IconButton onClick={saveEdit} bare name="CheckCircleIcon" style="solid" size={30} className="rounded-1 border-0 outline-0 text-success func p-1" ariaLabel="Salvar edição" />
              ) : (
                <>
                  <IconButton onClick={() => setDeletingIndex(index)} bare name="TrashIcon" style="solid" size={18} className="rounded-1 border-0 outline-0 text-danger func rounded-2 p-1" ariaLabel="Excluir item" />
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
