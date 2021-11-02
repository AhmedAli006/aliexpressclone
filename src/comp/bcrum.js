import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          y2k
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          iphone 13
        </Link>
         <Link
          underline="hover"
          color="inherit"
          href="#"
        >
          hair wig
        </Link>
          <Link
          underline="hover"
          color="inherit"
          href="#"
        >
          chrismas
        </Link>
          <Link
          underline="hover"
          color="inherit"
          href="#"
        >
          iphone 13
        </Link>
        <Typography color="text.primary">.</Typography>
      </Breadcrumbs>
    </div>
  );
}