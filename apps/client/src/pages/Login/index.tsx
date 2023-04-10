import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  FormLabel,
  Checkbox
} from '@chakra-ui/react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import useLoginSuccessAlert from '../../store/LoginSuccessStore';

import IsAuthenticated from '../../utils/IsAuthenticated';
import StoreLogo from '../../components/StoreLogo';
import loginInterface from './types';
import useLoginFailedAlert from '../../store/LoginFailedStore';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoginSuccessful, openLoginSuccess, closeLoginSuccess } =
    useLoginSuccessAlert();
  const { openLoginFailed, closeLoginFailed } = useLoginFailedAlert();

  const rememberUsername = !!localStorage.getItem('savedUsername'),
    [isRemember, setIsRemember] = useState(rememberUsername);

  const [showPass, setShowPass] = useState(false),
    handleClick = () => setShowPass(!showPass);

  const navigate = useNavigate();
  IsAuthenticated() && <Navigate to="/home/dashboard" replace />;

  const {
    control,
    trigger,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm<loginInterface>();

  const onSubmit: SubmitHandler<loginInterface> = async (data) => {
    try {
      setIsLoading(true);

      const { default: userService } = await import('../../api/userService'),
        delay = new Promise((resolve) => setTimeout(resolve, 800)),
        responseData = await userService.login(data);

      const [response] = await Promise.all([responseData, delay]);

      if (response.token) {
        openLoginSuccess();
        setTimeout(() => closeLoginSuccess(), 5000);
        setTimeout(() => navigate('/home/dashboard'), 1000);
        isRemember
          ? localStorage.setItem('savedUsername', data.username)
          : localStorage.removeItem('savedUsername');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const response = error.response;
        if (response && response.status === 404) {
          openLoginFailed();
          setTimeout(() => closeLoginFailed(), 5000);
          // alert(`User not found: ${response.data.message}`);
        } else {
          alert('An error occured. Please try again later.');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#1e1e1e] h-screen grid place-items-center pt-8">
      <form
        className="bg-[#d9d9d9] flex flex-col my-0 mx-auto p-7 h-[500px] w-80 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <StoreLogo />

        <Controller
          name="username"
          control={control}
          defaultValue={localStorage.getItem('savedUsername') || ''}
          rules={{ required: true }}
          render={({ field }) => {
            const isInvalid = !isValid && !!errors.username;
            const isRequired = errors.username?.type === 'required';

            return (
              <InputGroup size="md" className="flex flex-col mb-2">
                <FormLabel
                  className="font-semibold selec-none"
                  htmlFor="username"
                >
                  Username
                </FormLabel>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger('username');
                  }}
                  id="username"
                  type="text"
                  bg="white"
                  isInvalid={isInvalid}
                  errorBorderColor="red.500"
                />
                {isRequired && (
                  <span className="text-red-600">*Username is required</span>
                )}
              </InputGroup>
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true, maxLength: 8 }}
          render={({ field }) => {
            const inputType = showPass ? 'text' : 'password',
              isInvalid = !isValid && !!errors.password,
              isRequired = errors.password?.type === 'required',
              isMaxLength = errors.password?.type === 'maxLength';

            return (
              <InputGroup size="md" className="flex flex-col mb-4">
                <FormLabel
                  className="font-semibold select-none"
                  htmlFor="password"
                >
                  Password
                </FormLabel>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger('password');
                  }}
                  id="password"
                  type={inputType}
                  bg="white"
                  isInvalid={isInvalid}
                  errorBorderColor="red.500"
                />
                <InputRightElement width="3.75rem" mt={8}>
                  <Button h="1.75rem" size="md" onClick={handleClick}>
                    {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </Button>
                </InputRightElement>

                {isRequired && (
                  <span className="text-red-600">*Password is required</span>
                )}

                {isMaxLength && (
                  <span className="text-red-600">
                    Password should not be more than 8 characters
                  </span>
                )}
              </InputGroup>
            );
          }}
        />

        <Checkbox
          size="sm"
          colorScheme="orange"
          isChecked={isRemember}
          onChange={(e) => setIsRemember(e.target.checked)}
        >
          Remember Me
        </Checkbox>

        <Button
          isLoading={isLoading || isLoginSuccessful}
          type="submit"
          colorScheme="orange"
          mt="auto"
        >
          SIGN IN
        </Button>
      </form>
    </div>
  );
}
