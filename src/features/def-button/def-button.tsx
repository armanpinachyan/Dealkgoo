import React from 'react';
import { Button } from '@mui/material';

interface IThisProps {
  bg: string;
  text: any;
  filter?: string;
  onClick?: () => void;
  className?: string;
  height?: number;
  width?: number;
  borderRadius?: number;
  border?: string;
  paddingR?: number;
  paddingL?: number;
  textColor?: string;
}

function DefButton({
  bg,
  text,
  onClick,
  filter,
  className,
  height,
  borderRadius,
  width,
  paddingR,
  paddingL,
  textColor,
  border
}: IThisProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={className}
      sx={{
        backgroundColor: bg,
        borderRadius: borderRadius ? `${borderRadius}px` : '30px',
        height: height ? height : 41,
        paddingLeft: paddingL ? `${paddingL}px` : 3,
        paddingRight: paddingR ? `${paddingR}px` : 3,
        textTransform: 'inherit',
        fontSize: 16,
        width: width ? `${width}px` : 'auto',
        maxWidth: width ? `${width}px` : 'auto',
        filter: filter ? filter : 'drop-shadow(0px 5px 12.5px rgba(39,99,255,0.3))',
        boxShadow: null,
        minWidth: 20,
        whiteSpace: 'nowrap',
        color: textColor || '',
        border: border || '',
        '&:hover': {
          backgroundColor: bg
        },
        '@media (max-width: 576px)': {
          fontSize: 14,
          minWidth: 17,
          height: height ? height : 37,
          paddingLeft: paddingL ? `${paddingL}px` : 2,
          paddingRight: paddingR ? `${paddingR}px` : 2
        }
      }}>
      {text}
    </Button>
  );
}

export default DefButton;
