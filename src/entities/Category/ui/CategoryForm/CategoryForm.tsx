import { ChangeEvent, memo, useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import { Category } from '../../model/types/category';

interface CategoryFormProps {
  title: string;
  categories?: Category[];
  selectedCategory?: Category;
  onChange: (category: Category) => void;
}

export const CategoryForm: React.FC<CategoryFormProps> = memo(({
  title,
  onChange,
  categories = [],
  selectedCategory = '',
}: CategoryFormProps) => {
  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = event.target.value as Category;
    onChange(selectedCategory);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={selectedCategory}
        name="radio-buttons-group"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <FormControlLabel
          value=""
          key="all"
          control={<Radio />}
          label="all"
        />
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            value={category}
            control={<Radio />}
            label={category}
          />
        ))}
      </RadioGroup>
    </FormControl>

  );
});
