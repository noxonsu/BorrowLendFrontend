import { Paper, PaperProps, Typography } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

import LoveGhost from '/public/loveGhost.svg';

interface ChangeNetworkPaperProps extends PaperProps {
  message: ReactNode;
  description?: ReactNode;
}

export const WarningBannerPaper = ({
  children,
  message,
  description,
  sx,
  ...rest
}: PropsWithChildren<ChangeNetworkPaperProps>) => {
  return (
    <Paper
      {...rest}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 4,
        flex: 1,
        ...sx,
      }}
    >
      <LoveGhost style={{ marginBottom: '16px' }} />
      <>
        <Typography variant="h2" sx={{ mb: 2 }}>
          {message}
        </Typography>
        <Typography sx={{ mb: 6 }} color="text.secondary">
          {description}
        </Typography>
        {children}
      </>
    </Paper>
  );
};
