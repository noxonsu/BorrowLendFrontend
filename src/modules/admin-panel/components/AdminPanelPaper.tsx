import { Paper } from '@mui/material';
import { PropsWithChildren } from 'react';

type Props = Record<string, unknown>;

export const AdminPanelPaper = ({ children }: PropsWithChildren<Props>) => (
  <Paper
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      p: 4,
      flex: 1,
      '& > *:not(:last-child)': { mb: 2 },
    }}
  >
    {children}
  </Paper>
);
