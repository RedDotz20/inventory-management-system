import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

import IsAuthenticated from '../../utils/IsAuthenticated';
import StoreLogo from '../../components/StoreLogo';
import loginInterface from './types';

import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
} from './components/LoginComponents';

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const handleClick = () => setShowPass(!showPass);

  const [error, setError] = useState<null | string>(null);
  const { register, handleSubmit } = useForm<loginInterface>();
  const navigate = useNavigate();

  if (IsAuthenticated()) return <Navigate to="/home/dashboard" replace />;

  const onSubmit: SubmitHandler<loginInterface> = async (data) => {
    try {
      const { default: userService } = await import('../../api/userService');
      const response = await userService.login(data);
      console.log(response);
      if (response.token) {
        navigate('/home/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occured. Please try again later.');
    }
  };

  return (
    <div className="bg-[#1e1e1e] h-screen grid place-items-center pt-8">
      <form
        className="bg-[#d9d9d9] flex flex-col my-0 mx-auto p-7 h-[500px] w-80 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <StoreLogo />
        <InputGroup size="md" className="flex flex-col mb-4">
          <label htmlFor="username" className="font-semibold">
            Username
          </label>
          <Input
            id="username"
            type="text"
            borderColor="black"
            _hover={{ borderColor: 'black' }}
            focusBorderColor="tranparent"
            {...register('username', { required: true, maxLength: 40 })}
            pr="4.5rem"
          />
        </InputGroup>

        <InputGroup size="md" className="flex flex-col mb-4">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <Input
            id="password"
            type={showPass ? 'text' : 'password'}
            borderColor="black"
            _hover={{ borderColor: 'black' }}
            focusBorderColor="tranparent"
            {...register('password', { required: true, maxLength: 8 })}
            pr="4.5rem"
          />
          <InputRightElement width="4.5rem" className="mt-6">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {showPass ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button colorScheme="orange" type="submit" className="mt-auto">
          LOGIN
        </Button>
      </form>
    </div>
  );
}
