import IconButton from '../../../components/ui/IconButton/icon-button';

export default function AddItemInput({ values, handleInput, Insert }) {
  return (
    <div className="fixed-bottom bg-light border-top">
      <div className="container py-2">
        <div className="input-group">
          <input
            onChange={handleInput}
            value={values}
            type="text"
            className="me-1 form-control"
            placeholder="Digite aqui e comece a criar..."
            aria-label="Digite aqui e comece a criar..."
            aria-describedby="button-addon2"
          />
          <IconButton
            onClick={Insert}
            type="submit"
            variant="success"
            name="PaperAirplaneIcon"
            style="solid"
            size={24}
            className="bg-gradient rounded-1 border-0 outline-0 p-1 func"
            ariaLabel="Enviar item para lista"
          />
        </div>
      </div>
    </div>
  );
}
