import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

import { FooterItemType } from '../../model/items';

interface FooterListProps {
    items: FooterItemType[];
}

export const FooterList: FC<FooterListProps> = memo(({ items = [] }:FooterListProps) => (
  <List>
    {items.map(({ path, text }) => (
      <ListItem key={path} sx={{ padding: '.1rem' }}>
        <Link to={path} aria-label={text}>
          <ListItemText primary={text} />
        </Link>
      </ListItem>
    ))}
  </List>
));
