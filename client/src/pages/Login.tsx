import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import loginTypes from "../interfaces/loginInterface";
import clientLogin from "../api/clientLogin";
import isAuth from "../utils/isAuth";
import StoreLogoImg from "../components/StoreLogoImg";

// import LoginMssgBox from "../components/modals/LoginMssgBox";

export default function Login() {
	const [showPass, setShowPass] = useState(false);
	const handleClick = () => setShowPass(!showPass);

	const [error, setError] = useState<null | string>(null);
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	if (isAuth()) return <Navigate to="/home/dashboard" replace />;

	const onSubmit: SubmitHandler<loginTypes> = async (data) => {
		try {
			const response = await clientLogin(data);
			console.log(response);
			if (response.token) {
				navigate("/home/dashboard");
			} else {
				setError("Invalid username or password");
			}
		} catch (error) {
			setError("An error occured. Please try again later.");
		}
	};

	return (
		<div className="bg-[#1e1e1e] h-screen grid place-items-center pt-8">
			{/* <LoginMssgBox /> */}
			<form
				className="bg-[#d9d9d9] flex flex-col my-0 mx-auto p-7 h-[500px] w-80 rounded-xl"
				onSubmit={handleSubmit(onSubmit)}
			>
				<StoreLogoImg />
				<InputGroup size="md" className="flex flex-col mb-4">
					<label htmlFor="username" className="font-semibold">
						Username
					</label>
					<Input
						id="username"
						type="text"
						borderColor="black"
						_hover={{ borderColor: "black" }}
						focusBorderColor="tranparent"
						{...register("username", { required: true, maxLength: 80 })}
						pr="4.5rem"
					/>
				</InputGroup>

				<InputGroup size="md" className="flex flex-col mb-4">
					<label htmlFor="password" className="font-semibold">
						Password
					</label>
					<Input
						id="password"
						type={showPass ? "text" : "password"}
						borderColor="black"
						_hover={{ borderColor: "black" }}
						focusBorderColor="tranparent"
						{...register("password", { required: true, maxLength: 100 })}
						pr="4.5rem"
					/>
					<InputRightElement width="4.5rem" className="mt-6">
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{showPass ? "Hide" : "Show"}
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
