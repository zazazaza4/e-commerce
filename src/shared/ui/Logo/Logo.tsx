import { FC, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SxProps, Theme, Typography } from '@mui/material';

import LogoSvg from 'shared/assets/icons/logo.svg';

interface LogoProps {
  sx?: SxProps<Theme>;
  size?: number;
  color?: string;
}

export const Logo: FC<LogoProps> = memo(({
  sx,
  size = 40,
  color = 'white',
}: LogoProps) => {
  const iconStyles = useMemo(() => (
    {
      width: size,
      height: size,
      fill: color,
    }
  ), [color, size]);

  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        ...sx,
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
      }}
    >
      <LogoSvg style={iconStyles} />
    </Typography>
  );
});
