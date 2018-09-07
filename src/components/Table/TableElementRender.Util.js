import React from 'react';
import { Icon } from 'semantic-ui-react';

const elementNameAndJSXMap = {
  Icon,
};
const renderElementFromObjectKeyAndValue = (name, props) => {
  //  console.log('renderElementFromObjectKeyAndValue', { name, props });
  const element = elementNameAndJSXMap[name];
  const elementProps = {};
  Object.keys(props).map((key) => {
    if (key.match('#') || key.match('-')) {
      elementProps[key.slice(1)] = props[key];
    }
  });
  return React.createElement(element, elementProps);
};

export default renderElementFromObjectKeyAndValue;
