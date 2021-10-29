/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import { Select, Flex, Input, Button, Text, Center } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import educativeOffer from "../../data/educativeOffer.json";
import styles from "../../styles/styles.json";

const form = () => {
	const carrera = educativeOffer;
	const [validation, setValidation] = useState();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data, e) => {
		e.target.reset();
		console.log(data);
		setValidation(true);
	};

	useEffect(() => {
		if (
			errors.telefono ||
			errors.nombre ||
			errors.primerApellido ||
			errors.segundoApellido ||
			errors.correo
		) {
			// console.log(data);
			return setValidation(false);
		}
		return null;
	}, [
		errors.telefono,
		errors.nombre,
		errors.primerApellido,
		errors.segundoApellido,
		errors.correo,
	]);

	return (
		<Flex fontFamily={styles.font.fontFamily}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id="name"
					type="text"
					{...register("nombre", { required: true })}
					variant="flushed"
					placeholder="* Nombre Completo: "
				/>
				{/* errors will return when field validation fails  */}
				{errors.nombre && <Text color="red"> Este campo es requerido.</Text>}
				<Input
					id="lastName"
					type="text"
					{...register("primerApellido", { required: true })}
					variant="flushed"
					placeholder="* Apellido Paterno: "
				/>
				{errors.primerApellido && <Text color="red"> Este campo es requerido.</Text>}
				<Input
					id="secondLastName"
					type="text"
					{...register("segundoApellido", { required: true })}
					variant="flushed"
					placeholder="* Apellido Materno: "
				/>
				{errors.segundoApellido && <Text color="red"> Este campo es requerido.</Text>}
				<Input
					id="email"
					{...register("correo", { required: true })}
					variant="flushed"
					type="email"
					placeholder="* Correo: "
				/>
				{errors.correo && <Text color="red"> Este campo es requerido.</Text>}
				<Input
					id="phone"
					type="number"
					{...register("telefono", { required: true })}
					variant="flushed"
					placeholder="* WhatsApp(10 Dígitos): "
				/>
				{errors.telefono && <Text color="red"> Este campo es requerido.</Text>}
				<Text>Me quiero inscribir a </Text>
				<Select variant="flushed" placeholder="---">
					{carrera.map((item, index) => (
						<option
							{...register("Select", { required: false })}
							key={`option-${index}`}
						>
							{item.carrera}
						</option>
					))}
				</Select>
				<Button
					padding="30"
					bg="#0D47A1"
					_hover={{ color: "#FFFFFF", filter: "brightness(88%)" }}
					color="white"
					marginTop="25px"
					marginBottom="25px"
					type="submit"
				>
					REGISTRARME
				</Button>
				{validation === false && (
					<Center
						h={["10%", "10%", "10%", "10%"]}
						border="1px"
						borderColor="orange"
						bgColor="none"
					>
						<Text>
							Uno o más campos tienen un error. Por favor revíselo y reinténtelo.
						</Text>
					</Center>
				)}
				{validation === true && (
					<Center
						h={["15%", "15%", "10%", "10%"]}
						border="1px"
						borderColor="orange"
						bgColor="none"
					>
						<Text color="white">
							Gracias por tu mensaje. El mensaje ha sido enviado.
						</Text>
					</Center>
				)}
			</form>
		</Flex>
	);
};

export default form;
