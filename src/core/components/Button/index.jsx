import React from 'react'
import ButtonMaterial from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
    }
}))

const Button = ({ text, onClick, color = 'primary', size = 'medium' }) => {
    const classes = useStyles()

    return (
        <ButtonMaterial
            className={classes.root}
            variant='contained'
            size={size}
            color={color}
            onClick={onClick}
            disableElevation>
            {text}
        </ButtonMaterial>
    )
}

export default Button
