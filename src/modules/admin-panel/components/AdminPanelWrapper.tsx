import { Trans } from '@lingui/macro';
import { CircularProgress, Typography } from '@mui/material';
import { useAdminPanel } from '../hooks/AdminPanelProvider';
import { AdminPanelBox } from './AdminPanelBox';
import { ContractSettings } from './ContractSettings';
import { UiSettings } from './UiSettings';
import { Button } from './Button';
import { Alert } from './Alert';

export const AdminPanelWrapper = () => {
  const { access, register, error, settings, writing, canWrite, set, write, read } =
    useAdminPanel();

  if (writing) {
    return (
      <>
        <CircularProgress />
        <Typography variant="h3">
          <Trans>Saving settings...</Trans>
        </Typography>
        <Alert severity="info">
          <Trans>It can take several seconds</Trans>
        </Alert>
      </>
    );
  }

  if (!settings) {
    if (error) {
      return (
        <>
          <Button onClick={read}>
            <Trans>Load settings</Trans>
          </Button>
          <Alert severity="error">{error}</Alert>
        </>
      );
    }

    return (
      <>
        <CircularProgress />
        <Typography variant="h3">
          <Trans>Loading settings...</Trans>
        </Typography>
        <Alert severity="info">
          <Trans>It can take several seconds</Trans>
        </Alert>
      </>
    );
  }

  if (register) {
    return (
      <>
        <Button onClick={write}>
          <Trans>Register product</Trans>
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </>
    );
  }

  if (!access) {
    return (
      <>
        <Alert severity="error">
          <Trans>Access denied</Trans>
        </Alert>
        <Alert severity="warning">
          <Trans>You are not an owner</Trans>
        </Alert>
        <Alert severity="info">
          <Trans>Try to change your wallet account</Trans>
        </Alert>
      </>
    );
  }

  return (
    <AdminPanelBox>
      <UiSettings settings={settings} onApply={set} disabled={writing} />
      <ContractSettings settings={settings} onApply={set} disabled={writing} />
      <Button onClick={write} disabled={writing || !canWrite}>
        <Trans>Save settings</Trans>
      </Button>
      {canWrite && (
        <Alert severity="warning">
          <Trans>Save all changes to blockchain storage to avoid data loss</Trans>
        </Alert>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </AdminPanelBox>
  );
};
