import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ReactReduxContext, useStore } from 'react-redux';
import {
  Box, Button, Grid, TextField,
} from '@mui/material';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { emailReducer } from '../../model/slice/emailSlice';
import { FormData } from '../../model/types/email';

const emailReducerKey: StateSchemaKey = 'email';

interface EmailFormOrderProps {
  onSubmit: SubmitHandler<FormData>;
  isDisabled?: boolean;
}

export const EmailFormOrder: FC<EmailFormOrderProps> = ({
  onSubmit,
  isDisabled = false,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { t } = useTranslation('checkout');
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add(emailReducerKey, emailReducer);
    dispatch({ type: `@INIT ${emailReducerKey} reducer` });

    return () => {
      store.reducerManager.remove(emailReducerKey);
      dispatch({ type: `@DESTROY ${emailReducerKey} reducer` });
    };
    // eslint-disable-next-line
    }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: t('nameRequired') }}
            render={({ field }) => (
              <TextField
                disabled={isDisabled}
                {...field}
                label={t('name')}
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{ marginBottom: 2 }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: t('emailRequired'),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: t('invalidEmail'),
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label={t('email')}
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ marginBottom: 2 }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: t('phoneRequired'),
              pattern: {
                value: /^\+(?:[0-9] ?){6,14}[0-9]$/i,
                message: t('invalidPhone'),
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label={t('phone')}
                variant="outlined"
                fullWidth
                disabled={isDisabled}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                sx={{ marginBottom: 2 }}
              />
            )}
          />
        </Grid>
      </Grid>
      <Box mt={3}>
        <Button
          type="submit"
          variant="contained"
          disabled={isDisabled}
          color="primary"
        >
          {t('placeOrder')}
        </Button>
      </Box>
    </form>
  );
};
