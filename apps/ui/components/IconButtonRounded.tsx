import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

type IconButtonRoundedProps = IconButtonProps & {
  children?: React.ReactNode
};


const ButtonRounded = styled(IconButton)<IconButtonRoundedProps>(() => ({
  boxShadow: '0px 0px 0px 2px #3c3c3c inset',
  color: '#3c3c3c',
  "&.MuiIconButton-colorSuccess": {
    backgroundColor: '#10b981',
    color: '#2c2c2c'
  },
  "&.MuiIconButton-colorSuccess:hover": {
    backgroundColor: '#059669',
  }
}));

const IconButtonRounded = ({ children, ...props }: IconButtonRoundedProps): JSX.Element => {
  return <ButtonRounded {...props}>{children}</ButtonRounded>
}

export default IconButtonRounded;