import React from 'react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { grey } from '@material-ui/core/colors';

const styles = {
  menuRoot: {
    height: '100%',
  },
  listTitle: {
    padding: '10px 10px 0 25px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
    fontStyle: 'oblique',
  },
  liStyle: {
    color: grey[400],
    textTransform: 'capitalize',
  },
  selected: {
    color: grey[800],
    backgroundColor: grey[200],
  },
};

const createListItems1Layer = (baseUri, LinkComponent, linkProps) => {
  let selectedStyle;

  return (
    <div key={baseUri}>
      <Divider />
      <LinkComponent href={`/${baseUri}`} {...linkProps}>
        <ListItem button style={selectedStyle}>
          <ListItemText primary={baseUri} style={styles.liStyle} />
        </ListItem>
      </LinkComponent>
    </div>
  );
};

const createListItems2Layer = (baseUri, nameList, LinkComponent, linkProps) => {
  const listTitle = (
    <div style={styles.listTitle}>
      {baseUri}
    </div>
  );

  const listItems = nameList.map((name) => {
    let selectedStyle;

    return (
      <LinkComponent href={`/${baseUri}/${name}`} key={name} {...linkProps}>
        <ListItem button style={selectedStyle}>
          <ListItemText primary={name} style={styles.liStyle} />
        </ListItem>
      </LinkComponent>
    );
  });

  return (
    <div key={baseUri}>
      <Divider />
      {listTitle}
      {listItems}
    </div>
  );
};

const DrawerMenu = (props) => {
  const { pathMap, linkComponent, linkProps } = props;
  const menuListItems = pathMap.map((onePathMap) => {
    const baseUri = onePathMap.pathname;
    const nameList = onePathMap.children;

    if (nameList) {
      return createListItems2Layer(baseUri, nameList, linkComponent, linkProps);
    } 
    return createListItems1Layer(baseUri, linkComponent, linkProps);
  });

  return (
    <div style={styles.menuRoot}>
      {menuListItems}
    </div>
  );
};

DrawerMenu.propTypes = {
  pathMap: PropTypes.array,
  linkComponent: PropTypes.any,
  linkProps: PropTypes.object,
};

DrawerMenu.defaultProps = {
  pathMap: [],
  linkComponent: 'a',
  linkProps: null,
};

export default DrawerMenu;
