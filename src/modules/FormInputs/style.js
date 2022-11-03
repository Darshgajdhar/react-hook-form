import { styled } from "@mui/material";

const FormInputFieldText = styled('input', {
    name: 'FormInputFieldText'
})({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '25px',
    marginLeft: '45px',
    padding: '20px',
    width: '80%',
    background: 'transparent',
    border: 'none',
    fontSize: '16px',
    color: 'rgb(141,30,141)',
    '&:focus': {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: 'rgb(141,30,141)',
        borderBottom: '2px solid rgb(141,30,141)',
    },
    '@media (min-width: 0px) and (max-width:768px)': {
        padding: '20px 0px',
        width: '90%',
        marginLeft: '15px'
    }
});

export default FormInputFieldText;