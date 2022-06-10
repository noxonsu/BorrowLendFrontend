import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdminSettings } from '../types';
import { Trans } from '@lingui/macro';

type Props = {
  disabled: boolean;
  settings: AdminSettings;
  onApply: (settings: AdminSettings) => void;
};

export const ContractSettings = ({ disabled }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const expandhandler = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={expandhandler}
      disabled={disabled}
      sx={{ alignSelf: 'stretch' }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h4">
          <Trans>Contracts</Trans>
        </Typography>
        <Typography sx={{ color: 'text.secondary', ml: 2, alignSelf: 'center' }}>
          [in development]
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ textAlign: 'start', display: 'flex' }}>
        <FormControl sx={{ flexGrow: 1, '& > *:not(:last-child)': { m: 0, mb: 2 } }}>
          Coming soon 🧑‍🔧
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};
