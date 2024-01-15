import { FC, KeyboardEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box, Button, TextField,
} from '@mui/material';

interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const { t } = useTranslation('products');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'normal',
        justifyContent: 'center',
        gap: '5px',
      }}
    >
      <TextField
        sx={{
          flex: '1',
        }}
        data-testid="SearchInput"
        variant="outlined"
        label={t('searchPlaceholder')}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        data-testid="SearchButton"
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        {t('searchButton')}
      </Button>
    </Box>
  );
};
