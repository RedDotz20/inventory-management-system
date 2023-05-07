import { Box, useRadio, UseRadioProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface RadioCardProps extends UseRadioProps {
  children: ReactNode;
}

function RadioCard(props: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          color: 'black',
          borderColor: 'orange'
        }}
        px={2}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default RadioCard;
