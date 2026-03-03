import Button from '../../../components/ui/Button/Button';

interface CreateListButtonProps {
  href?: string;
}

export default function CreateListButton({ href = '/criar' }: CreateListButtonProps) {
  return (
    <div className="d-lg-none text-center mt-4 mb-4 w-100">
      <Button 
        href={href} 
        className="bg-gradient fw-bolder px-4 py-2" 
        variant="outline-success"
      >
        Criar lista
      </Button>
    </div>
  );
}

