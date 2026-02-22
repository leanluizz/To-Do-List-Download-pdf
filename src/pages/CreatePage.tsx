import CreateLists from '../layout/Feature/CreateLists';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button/button';
import Icon from '../components/ui/Icon/icon';

export default function CreatePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid pt-3">
        <Button 
          onClick={() => navigate('/')} 
          variant="success" 
          className="d-flex align-items-center justify-content-center p-2 rounded-circle shadow-sm"
          title="Voltar para Início"
        >
          <Icon name="ArrowLeftIcon" size={20} className="text-white" />
        </Button>
      </div>
      <CreateLists />
    </>
  );
}
