import { AnimatePresence } from 'framer-motion';

import LoginSuccessAlert from './LoginSuccessAlert';
import useLoginSuccessAlert from '../../store/LoginSuccessStore';

import LoginFailureAlert from './LoginFailedAlert';
import useLoginFailureAlert from '../../store/LoginFailedStore';

function Alerts() {
  const { isLoginSuccessful, closeLoginSuccess } = useLoginSuccessAlert();
  const { isLoginFailed, closeLoginFailed } = useLoginFailureAlert();
  return (
    <div className="flex flex-col absolute gap-1 top-4 right-4 overflow-hidden">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isLoginSuccessful && (
          <LoginSuccessAlert closeAlert={closeLoginSuccess} />
        )}
        {isLoginFailed && <LoginFailureAlert closeAlert={closeLoginFailed} />}
      </AnimatePresence>
    </div>
  );
}

export default Alerts;
