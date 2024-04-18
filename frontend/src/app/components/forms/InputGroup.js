import Label from "./Label"
import Input from "./Input"

export default function InputGroup(props) {
    return (
        <Label label={props.label}>
            <Input type={props.type} placeholder={props.placeholder} value={ props.value } update={ props.update } />
        </Label>
    )
}