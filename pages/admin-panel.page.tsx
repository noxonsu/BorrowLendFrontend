import { Trans } from '@lingui/macro';
import { Button } from '@mui/material';
import { MainLayout } from 'src/layouts/MainLayout';
import { useWeb3Context } from 'src/libs/hooks/useWeb3Context';
import { AdminTopPanel } from 'src/modules/admin-panel/components/AdminTopPanel';
import { WarningBannerPaper } from 'src/modules/admin-panel/components/WarningBannerPaper';
import { ContentContainer } from '../src/components/ContentContainer';
import { AdminPanelWrapper } from 'src/modules/admin-panel/components/AdminPanelWrapper';
import { AdminPanelPaper } from 'src/modules/admin-panel/components/AdminPanelPaper';
import { ConnectWalletPaper } from 'src/components/ConnectWalletPaper';
import { isStorageChainId } from 'src/modules/admin-panel/utils/isStorageChainId';
import { getStorageChainId } from 'src/modules/admin-panel/utils/getStorageChainId';
import { networkConfigs } from 'src/ui-config/networksConfig';

export default function AdminPanel() {
  const { chainId, connected, loading, switchNetwork } = useWeb3Context();

  if (!connected) {
    return <ConnectWalletPaper loading={loading} />;
  }

  if (!isStorageChainId(chainId)) {
    return (
      <WarningBannerPaper
        message={
          <>
            <Trans>Switch to</Trans>&nbsp;
            {networkConfigs[getStorageChainId()].name}
          </>
        }
      >
        <Button variant="gradient" onClick={() => switchNetwork(getStorageChainId())}>
          <Trans>Switch network</Trans>
        </Button>
      </WarningBannerPaper>
    );
  }

  return (
    <AdminPanelPaper>
      <AdminPanelWrapper />
    </AdminPanelPaper>
  );
}

AdminPanel.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout>
      <AdminTopPanel />
      <ContentContainer>{page}</ContentContainer>
    </MainLayout>
  );
};
