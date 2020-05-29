import React from 'react'
import TextFieldComponent from '@material-ui/core/TextField'

const InputField = ({ label, onChange, placeholder }) => {

    return (
        <TextFieldComponent
            label={label}
            onChange={onChange}
            helperText={placeholder}
            variant='outlined'
            autoComplete='off'
            noValidate
            fullWidth
        />

    )
}

export default InputField
