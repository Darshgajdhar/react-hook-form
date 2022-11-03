import React from 'react'
import FormInputs from '../FormInputs/FormInputs'
import FormComponent, { FormInputComponent, FormInputDesign, FormButton } from './style';

const Form = ({ onSubmit, register, handleSubmit, errors }) => {
    return (
        <FormComponent>
            <FormInputComponent>
                <FormInputDesign>
                    <form onSubmit={handleSubmit(onSubmit)}
                    >
                        <FormInputs
                            register={register('firstName')}
                            fieldData={{
                                name: 'First Name',
                                type: 'text',
                            }}
                            errors={errors.firstName?.message}
                        />
                        <FormInputs
                            register={register('lastName')}
                            fieldData={{
                                name: 'Last Name',
                                type: 'text',
                            }}
                            errors={errors.lastName?.message}
                        />
                        <FormInputs
                            register={register('userName')}
                            fieldData={{
                                name: 'User Name',
                                type: 'text',
                            }}
                            errors={errors.userName?.message}
                        />
                        <FormInputs
                            register={register('email')}
                            fieldData={{
                                name: 'Email',
                                type: 'email',
                            }}
                            errors={errors.email?.message}
                        />
                        <FormInputs
                            register={register('age')}
                            fieldData={{
                                name: 'Age',
                                type: 'number',
                            }}
                            errors={errors.age?.message}
                        />
                        <FormInputs
                            register={register('password')}
                            fieldData={{
                                name: 'Password',
                                type: 'password',
                            }}
                            errors={errors.password?.message}
                        />
                        <FormInputs
                            register={register('confirmPassword')}
                            fieldData={{
                                name: 'Confirm Password',
                                type: 'password',
                            }}
                            errors={errors.confirmPassword?.message}
                        />
                        <FormButton
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </FormInputDesign>
            </FormInputComponent>
        </FormComponent>
    )
}

export default Form