import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';
import Link from 'next/link';

const Page2 = () => (
  <Fragment>
    <Button color="primary">
      Hello World Page2!
    </Button>
    <div>
      <Link href="/page1">
        <Button>To Page1</Button>
      </Link>
    </div>
  </Fragment>
);

export default Page2;
