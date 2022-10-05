import { Box, BoxProps, styled } from '@mui/material';


const ContainerFull = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[300]
}));

const LayoutNestedFull = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <ContainerFull
      component="main">
      {children}
    </ContainerFull>
  )
}

export default LayoutNestedFull;