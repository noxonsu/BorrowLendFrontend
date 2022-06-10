import { Typography, TypographyProps, TypographyPropsVariantOverrides } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { OverridableStringUnion } from '@mui/types';

export interface FormattedStringProps extends TypographyProps {
  firstValue: string;
  secondValue?: string;
  firstColor?: string;
  secondColor?: string;
  symbolsVariant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
}

export const FormatterString = ({
  firstValue,
  secondValue,
  symbolsVariant,
  firstColor,
  secondColor,
  ...rest
}: FormattedStringProps) => {
  return (
    <Typography
      {...rest}
      sx={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        ...rest.sx,
      }}
      noWrap
    >
      <Typography
        component="span"
        sx={{ mr: 0.5 }}
        variant={symbolsVariant || rest.variant}
        color={firstColor || 'text.firstly'}
      >
        {firstValue.toLocaleUpperCase()}
      </Typography>

      {secondValue && (
        <Typography
          component="span"
          sx={{ mr: 0.5, marginLeft: '.25rem' }}
          variant={symbolsVariant || rest.variant}
          color={secondColor || 'text.secondary'}
        >
          {secondValue.toLocaleUpperCase()}
        </Typography>
      )}
    </Typography>
  );
};
