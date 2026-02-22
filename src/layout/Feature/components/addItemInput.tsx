import { ChangeEvent } from 'react';
import IconButton from '../../../components/ui/IconButton/icon-button';
interface AddItemInputProps {
  values?: string;
  value?: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  Insert?: () => void;
  insertItem?: () => void;
  clearAll?: () => void;
}
export default function AddItemInput({ values, value, handleInput, Insert, insertItem, clearAll }: AddItemInputProps) {
  const inputValue = value ?? values;
  const onInsert = insertItem ?? Insert;
  function onClear() {
    if (typeof clearAll === 'function') {
      clearAll();
    }
  }
  return (
    <div className="fixed-bottom bg-light border-top">
      <div className="container py-2">
        <div className="input-group">
          <input
            onChange={handleInput}
            value={inputValue}
            type="text"
            className="me-1 form-control"
            placeholder="Digite aqui e comece a criar..."
            aria-label="Digite aqui e comece a criar..."
            aria-describedby="button-addon2"
          />
          <IconButton
            onClick={onInsert}
            title='Adicionar item'
            type="submit"
            variant="success"
            name="PaperAirplaneIcon"
            style="solid"
            size={24}
            className="bg-gradient rounded-1 border-0 outline-0 p-1 func"
            ariaLabel="Enviar item para lista"
          />
          <IconButton
            onClick={onClear}
            type="button"
            variant="danger"
            name="TrashIcon"
            style="solid"
            size={24}
            className="bg-gradient rounded-1 border-0 outline-0 p-1 func ms-2"
            ariaLabel="Excluir todos os itens da lista"
            title="Excluir todos"
          />
        </div>
      </div>
    </div>
  );
}
