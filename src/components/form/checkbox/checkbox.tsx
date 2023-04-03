import { Form } from "react-bootstrap";
import styled from "styled-components";


const StyledCheckBox = styled(Form.Check)`
    padding:10px 20px ;
`

type PropsCheck =  {
    type:string,
    label:string,
    handleChangeMaiorPreco: () => any
}
export default function CheckBox({label,type, handleChangeMaiorPreco}:PropsCheck){
    return(
      
            <StyledCheckBox type={type} label={label} onClick={handleChangeMaiorPreco} />
       
    )
}