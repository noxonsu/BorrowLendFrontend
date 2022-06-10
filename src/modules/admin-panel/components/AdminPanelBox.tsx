import { Box } from '@mui/system';
import { PropsWithChildren } from 'react';

type Props = Record<string, unknown>;

export const AdminPanelBox = ({ children }: PropsWithChildren<Props>) => (
  <Box
    sx={{
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textAlign: 'center',
      p: 4,
      flex: 1,
      '& > *:not(.MuiAccordion-root)': { mt: 2 },
    }}
  >
    {children}
  </Box>
);
