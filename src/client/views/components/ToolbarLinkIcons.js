import React, { Fragment } from 'react';

import IconButton from '@material-ui/core/IconButton';

import GitHub from './GitHub';

const ToolbarLinkIcons = () => {
  return (
    <Fragment>
      <IconButton
        href="https://github.com/thundermiracle/next-boilerplate"
        color="inherit"
      >
        <GitHub />
      </IconButton>
    </Fragment>
  );
};

export default ToolbarLinkIcons;
