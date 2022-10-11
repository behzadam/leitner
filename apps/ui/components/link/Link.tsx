import { Link as MuiLink, LinkProps, styled } from '@mui/material';
import NextLink from 'next/link';
import { forwardRef } from 'react';

const CustomLink = styled(MuiLink)<LinkProps>(() => ({
  textDecoration: 'none',
  color: 'rgba(0, 0, 0, 0.6)',
  '&:hover': {
    color: 'rgba(0, 0, 0, 0.7)'
  }
}));

const Link = forwardRef((props: any, ref: any) => {
  const { href } = props;
  return <NextLink href={href} passHref >
    <CustomLink ref={ref} {...props} />
  </NextLink>
})

Link.displayName = 'CustomLink';

export default Link;