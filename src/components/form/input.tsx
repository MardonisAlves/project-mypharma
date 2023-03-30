import styled from 'styled-components';

type InputForm = {
    type: string,
    label: string,
    name: string,
    value: string,
    min:string,
    handleChange: (value: string) => any
}



const InputWrapper = styled.div`
  display: block;
  margin-bottom: 20px;
  padding:20px;
`;


const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;



const InputField = styled.input`
display:flex;
font-size: 16px;
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
`;



const Input = ({ label, type, name, value, min, handleChange }: InputForm) => {
    return (
        <InputWrapper>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <InputField type={type} id={name} name={name} value={value} min={min} onChange={(e) => handleChange(e.target.value)} />
        </InputWrapper>
    );
};

export default Input;
