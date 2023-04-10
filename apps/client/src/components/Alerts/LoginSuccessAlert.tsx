import { Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';

import { motion } from 'framer-motion';

function LoginSuccessAlert({ closeAlert }: { closeAlert: () => void }) {
  const AlertMotion = motion(Alert);
  return (
    <AlertMotion
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      position="absolute"
      top={8}
      right={8}
      status="success"
      borderRadius="md"
      width={300}
      zIndex={999}
    >
      <AlertIcon />
      <AlertTitle>Login successful!</AlertTitle>
      <CloseButton onClick={() => closeAlert()} ml="auto" />
    </AlertMotion>
  );
}

export default LoginSuccessAlert;
