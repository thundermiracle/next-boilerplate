import React from 'react';
import PropTypes from 'prop-types';

import ResponsiveLayout from 'components/ResponsiveLayout';

import LayoutHead from './LayoutHead';
import LayoutDrawerHeader from './LayoutDrawerHeader';
import LayoutDrawerMenu from './LayoutDrawerMenu';

const Layout = (props) => {
  const { title, children } = props;
  
  const layoutdrawerHeader = (
    <LayoutDrawerHeader
      packageInfo={{
        version: process.env.PKG_VERSION,
        name: process.env.PKG_NAME,
      }}
    />
  );

  return (
    <ResponsiveLayout
      drawerHeader={layoutdrawerHeader}
      drawerMenu={<LayoutDrawerMenu />}
      title={title}
    >
      <LayoutHead title={title} />
      {children}
    </ResponsiveLayout>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Layout.defaultProps = {
  title: '',
  children: null,
};

export default Layout;
