import React from 'react';

import * as tableData from './tabledatasample.json';
// import { TableContainerProps } from './Table.typings';
import { typeOfObject } from './util';

import TableRenderContainer from './TableRender.Container';

class TableContainer extends React.Component {
  render() {
    const { data, id } = this.props;
    console.log('TableContainer', data);
    const dataType = typeOfObject(data);
    if (dataType && dataType === 'object' && data!== null) {
      return Object.keys(data).map((key, index) => {
        if (key === 'Table') {
          // console.log('TableContainerNew key is Table')
          return <TableRenderContainer key={`TableRenderContainer-${id}-${key}`} data={data[key]} id={id}/>;
        }
      });
    }
    return <div />;
  }
}

export default TableContainer;
