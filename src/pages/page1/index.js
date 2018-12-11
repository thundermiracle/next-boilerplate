import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';
import { NextLink } from 'lib/NextRelative';

const Page1 = () => (
  <Fragment>
    <Button color="primary">
      Hello World Page1!
    </Button>
    <div>
      <NextLink href="/page2">
        <Button>To Page2</Button>
      </NextLink>
    </div>
  </Fragment>
);

export default Page1;
