import { Trans } from '@lingui/macro';
import { useMediaQuery, useTheme } from '@mui/material';
import { FormatterString } from 'src/components/primitives/FormattedString';
import { TopInfoPanel } from 'src/components/TopInfoPanel/TopInfoPanel';
import { TopInfoPanelItem } from 'src/components/TopInfoPanel/TopInfoPanelItem';
import ShopIcon from 'public/icons/markets/shop-icon.svg';
import { useAdminPanel } from '../hooks/AdminPanelProvider';
import { getDomain } from '../utils/getDomain';
import { NoData } from 'src/components/primitives/NoData';

export const AdminTopPanel = () => {
  const { register, loading } = useAdminPanel();
  const theme = useTheme();
  const downToSM = useMediaQuery(theme.breakpoints.down('sm'));
  const noDataTypographyVariant = downToSM ? 'secondary16' : 'secondary21';

  return (
    <>
      <TopInfoPanel pageTitle={<Trans>Admin panel</Trans>}>
        <TopInfoPanelItem
          icon={<ShopIcon />}
          title={<Trans>Registred domain</Trans>}
          loading={loading}
        >
          {register ? (
            <NoData variant={noDataTypographyVariant} sx={{ opacity: '0.7' }} />
          ) : (
            <FormatterString
              firstValue={getDomain()}
              secondColor="#A5A8B6"
              symbolsVariant={noDataTypographyVariant}
            />
          )}
        </TopInfoPanelItem>
      </TopInfoPanel>
    </>
  );
};
