import React from 'react'
import MuiButton from '@material-ui/core/Button'

const Button = ({ children, ...rest }) => (
	<MuiButton { ...rest }>{ children }</MuiButton>
)

export default Button