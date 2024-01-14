import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MenuItem, Select, SelectChangeEvent,
} from '@mui/material';

export const LangSwitcher: FC = memo(() => {
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLang = event.target.value as string;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <Select
      sx={{
        color: 'white',
        boxShadow: 'none',
        '& .MuiSelect-icon': {
          color: 'white',
        },
        '.MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
      }}
      value={i18n.language}
      onChange={handleChange}
    >
      <MenuItem value="en">{t('langs.en')}</MenuItem>
      <MenuItem value="ukr">{t('langs.ukr')}</MenuItem>
    </Select>
  );
});
