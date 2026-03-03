import Button from '../../../components/ui/Button/Button';

interface ListPreviewProps {
  createListHref?: string;
}

export default function ListPreview({ createListHref = '/criar' }: ListPreviewProps) {
  return (
    <div className="d-none d-lg-flex flex-column w-25 alturaSeis border border-5 border-success border-gradient rounded-4 justify-content-between">
      <div className="flex-grow-1 d-flex flex-column">
        <div className="lines rounded-5 border-5 border-bottom border-success m-5" />
        <div className="linesTwo rounded-5 border-5 border-bottom border-success m-5" />
        <div className="linesThree rounded-5 border-5 border-bottom border-success m-5" />
        <div className="linesFour rounded-5 border-5 border-bottom border-success m-5" />
        <div className="linesFive rounded-5 border-5 border-bottom border-success m-5" />
      </div>
      <div className="p-3 pb-4 d-flex justify-content-center">
        <Button 
          href={createListHref} 
          className="bg-gradient fw-bolder w-48 px-4 py-2" 
          variant="success"
        >
          Criar lista
        </Button>
      </div>
    </div>
  );
}

