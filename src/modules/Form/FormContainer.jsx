import React from 'react'
import Form from './Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const FormContainer = () => {

    const schema = yup.object().shape({
        firstName: yup.string().required("Please provide your First Name!"),

        lastName: yup.string().required("Please provide your Last Name!"),

        userName: yup.string().required("Please provide User Name!").min(3, "User Name must have atleast 3 character").max(20, "User Name should below 20 character"),

        email: yup.string().required("Please provide Email Address!").email("Please provide valid email address!"),

        age: yup.number().positive("Age should not be negative").integer().min(18, "Entered Age should be greater than 18").max(65, "Entered Age should be less than 65").required("Please Enter Age"),

        password: yup.string().min(4).max(20).required(),

        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password Don't Match").required()
    });

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        alert("Data is sent Successfully!");
        console.log(data);
    }

    return (
        <Form
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
        />
    )
}

export default FormContainer