import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

const FormComponent = styled(Box, {
    name: 'FormComponent'
})({
    backgroundColor: "#212121",
    height: '100%',
    color: 'whitesmoke',
    padding: '40px 0px',
    '@media (min-width:0px) and (max-width:768px)': {
        height: 'auto'
    }
});

export const FormInputComponent = styled(Box, {
    name: 'FormInputComponent'
})({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
});

export const FormInputDesign = styled(Container, {
    name: 'FormInputDesign'
})({
    width: '50%',
    height: 'auto',
    textAlign: 'center',
    backgroundColor: '#D9AFD9',
    backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
    border: '1px solid rgb(141,30, 141)',
    borderRadius: '20px',
    display: 'flex',
    padding: '40px 20px',
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    '@media (min-width:0px) and (max-width:768px)': {
        width: '90%',
    },
    'span': {
        color: 'red',
        margin: '10px 0px',
        display: 'block'
    }
});

export const FormButton = styled('input', {
    name: 'FormButton'
})({
    padding: '10px',
    margin: '35px 0px',
    width: '70%',
    height: '50px',
    backgroundColor: 'rgb(141,30,141)',
    borderRadius: '12px',
    opacity: '0.7',
    color: 'whitesmoke',
    trasition: 'width 1.7s',
    fontSize: '1.13rem',
    fontWeight: '600',
    ':hover': {
        opacity: '1',
        width: '80%',
        backgroundColor: 'rgb(141,30,141)'
    }
})

export default FormComponent;