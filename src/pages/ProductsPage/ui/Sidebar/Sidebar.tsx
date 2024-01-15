import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Box,
  Paper,
  Typography,
} from '@mui/material';

import {
  Category,
  categoryActions,
  CategoryForm,
  fetchCategories,
  getCategories,
  getCategoryIsLoading,
  getSelectedCategory,
} from 'entities/Category';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui';

export const Sidebar: FC = memo(() => {
  const { t } = useTranslation('products');
  const dispatch = useAppDispatch();

  const categories = useSelector(getCategories);
  const isLoadingCategory = useSelector(getCategoryIsLoading);
  const selectedCategory = useSelector(getSelectedCategory);

  useEffect(() => {
    if (__PROJECT__ === 'frontend') {
      dispatch(fetchCategories());
    }
  }, [dispatch]);

  const handleCategoryChange = useCallback((category: Category) => {
    dispatch(categoryActions.setCategory(category));
  }, [dispatch]);

  return (
    <Paper>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          {t('sidebar.title')}
        </Typography>
        {
          isLoadingCategory ? (
            <Box
              height="100px"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Loader />
            </Box>
          )

            : (
              <CategoryForm
                title={t('sidebar.categoryTitle')}
                categories={categories}
                selectedCategory={selectedCategory}
                onChange={handleCategoryChange}
              />
            )
        }

      </Box>

    </Paper>
  );
});
