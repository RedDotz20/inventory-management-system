import { Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function LoginFailedAlert({ closeAlert }: { closeAlert: () => void }) {
  const AlertMotion = motion(Alert);
  return (
    <AlertMotion
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      status="error"
      borderRadius="md"
      width={300}
      zIndex={999}
    >
      <AlertIcon />
      <AlertTitle>Invalid Username or Password</AlertTitle>
      <CloseButton onClick={() => closeAlert()} ml="auto" />
    </AlertMotion>
  );
}

export default LoginFailedAlert;
