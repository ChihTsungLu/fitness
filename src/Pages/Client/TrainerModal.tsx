import Modal from '@mui/material/Modal';
import { useClientContext } from '../../ContextProvider/ClientContext';
const TrainerModal = () => {
  const { modalOpen, setModalOpen } = useClientContext();
  return (
    <Modal
      open={modalOpen}
      onClose={()=>setModalOpen(false)}
    >
      <div className='TrainerModal'>
        123
      </div>
    </Modal>
  )
}

export default TrainerModal