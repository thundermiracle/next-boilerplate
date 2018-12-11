import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';
import { NextLink } from 'lib/NextRelative';

const Page2 = () => (
  <Fragment>
    <Button color="primary">
      Hello World Page2!
    </Button>
    <div>
      <NextLink href="/page1">
        <Button>To Page1</Button>
      </NextLink>
    </div>
  </Fragment>
);

export default Page2;
