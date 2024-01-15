import { FC } from 'react'
import { useTranslation } from 'react-i18next';

interface [FTName]Props {
  className?: string
  
}

export const [FTName]: FC<[FTName]Props> = () => {
const { t } = useTranslation();

  return (
    <div>
     {t('')}
    </div>
  )
}