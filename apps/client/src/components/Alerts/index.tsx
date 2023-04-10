import LoginSuccessAlert from './LoginSuccessAlert';
import useLoginSuccessAlert from '../../store/LoginSuccessStore';
import { AnimatePresence } from 'framer-motion';

function Alerts() {
  const { isLoginSuccessful, closeAlert } = useLoginSuccessAlert();
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isLoginSuccessful && <LoginSuccessAlert closeAlert={closeAlert} />}
    </AnimatePresence>
  );
}

export default Alerts;
