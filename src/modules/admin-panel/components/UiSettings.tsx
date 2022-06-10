import { ChangeEvent, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdminSettings } from '../types';
import { Trans } from '@lingui/macro';
import { Button } from './Button';

type Props = {
  disabled: boolean;
  settings: AdminSettings;
  onApply: (settings: AdminSettings) => void;
};

export const UiSettings = ({ disabled, settings, onApply }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState(settings.title);
  const [logoUrl, setLogoUrl] = useState(settings.logoUrl);
  const [faviconUrl, setFaviconUrl] = useState(settings.faviconUrl);

  const logoUrlChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLogoUrl(event.target.value);
  };

  const faviconUrlChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFaviconUrl(event.target.value);
  };

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const applyHandler = () => {
    onApply({ title, logoUrl, faviconUrl });
  };

  const expandhandler = () => {
    setExpanded(!expanded);
  };

  const applyDisabled =
    disabled ||
    (settings.title === title &&
      settings.logoUrl === logoUrl &&
      settings.faviconUrl === faviconUrl);

  return (
    <Accordion
      expanded={expanded}
      onChange={expandhandler}
      disabled={disabled}
      sx={{ alignSelf: 'stretch' }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h4">
          <Trans>UI</Trans>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ textAlign: 'start', display: 'flex' }}>
        <FormControl sx={{ flexGrow: 1, '& > *:not(:last-child)': { m: 0, mb: 2 } }}>
          <TextField
            variant="outlined"
            label={<Trans>Logo url</Trans>}
            value={logoUrl}
            onChange={logoUrlChangeHandler}
            disabled={disabled}
            type="text"
          />
          <TextField
            variant="outlined"
            label={<Trans>Favicon url</Trans>}
            value={faviconUrl}
            onChange={faviconUrlChangeHandler}
            disabled={disabled}
            type="text"
          />
          <TextField
            variant="outlined"
            label={<Trans>Title</Trans>}
            value={title}
            onChange={titleChangeHandler}
            disabled={disabled}
            type="text"
          />
          <Button onClick={applyHandler} disabled={applyDisabled} sx={{ alignSelf: 'center' }}>
            <Trans>Apply</Trans>
          </Button>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};
