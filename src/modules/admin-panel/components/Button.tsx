import { Button as MButton, ButtonProps, useMediaQuery, useTheme } from '@mui/material';

export const Button = ({ sx, ...props }: ButtonProps) => {
  const theme = useTheme();
  const downToSM = useMediaQuery(theme.breakpoints.down('sm'));
  const bestButtonWidth = 196;
  const width = downToSM ? '100%' : bestButtonWidth;

  return <MButton {...props} variant="contained" sx={{ width, ...sx }} />;
};
