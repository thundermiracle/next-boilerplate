import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';
import Link from 'next/link';

const Page1 = () => (
  <Fragment>
    <Button color="primary">
      Hello World Page1!
    </Button>
    <div>
      <Link href="/page2">
        <Button>To Page2</Button>
      </Link>
    </div>
  </Fragment>
);

export default Page1;
