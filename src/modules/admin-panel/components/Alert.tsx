import { Alert as MAlert, AlertProps, useMediaQuery, useTheme } from '@mui/material';

export const Alert = ({ sx, ...props }: AlertProps) => {
  const theme = useTheme();
  const downToSM = useMediaQuery(theme.breakpoints.down('sm'));
  const width = downToSM ? '100%' : 'auto';
  return <MAlert {...props} sx={{ width, ...sx }} />;
};
