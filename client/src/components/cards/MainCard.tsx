import { useState } from "react";
import {
	Text,
	Card,
	Heading,
	CardHeader,
	CardBody,
	CardFooter,
} from "@chakra-ui/react";

interface CardInterface {
	header: string;
	body: string;
	color: string;
	borderColor: string;
}

function MainCard({ header, body, color, borderColor }: CardInterface) {
	return (
		<div
			className={`${borderColor} min-w-[200px] max-w-[200px] border-4 rounded-md`}
		>
			<Card>
				<CardHeader pb={0}>
					<Heading size="md" className="select-none">
						{header}
					</Heading>
				</CardHeader>
				<CardBody pt={2}>
					<Text className={`${color} text-3xl font-semibold select-none`}>
						{body}
					</Text>
				</CardBody>
			</Card>
		</div>
	);
}

export default MainCard;
