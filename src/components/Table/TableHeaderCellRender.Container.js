import React from 'react';
// import * as tableData from './tabledatasample.json';
import {
  Table,
  // Icon
} from 'semantic-ui-react';
// import TableCell from './TableCell.Component';

import { typeOfObject } from './util';

import tableElementRenderUtil from './TableElementRender.Util';
import { TableHeaderCell } from './StyledTable.Component';

class RenderTableHeaderCell extends React.Component {
  render() {
    const { data, id } = this.props;
    // const dataType = typeOfObject(data);
    // console.log('RenderTableCell. datatype is ', dataType)
    if (typeOfObject(data) === 'array') {
      // console.log('RenderTableCell dataType == "array"');
      return (
        data.map((d, index) => {
          const dataType = typeOfObject(d);
          if (dataType === 'string') {
            return (
              <Table.HeaderCell key={`Table.HeaderCell-${id}-${index}`}>
                {d}
              </Table.HeaderCell>
            );
          }
          if (dataType === 'object') {
            const TableCellProps = {};
            let CellText = '';
            Object.keys(d).forEach((key) => {
              if (key.match('#') || key.match('-')) {
                TableCellProps[key.slice(1)] = d[key];
                if (key.match('#')) {
                  CellText = d[key];
                }
              } else {
                CellText = tableElementRenderUtil(key, d[key]);
              }
            });
            // console.log('TableHeaderCellProps', TableCellProps)
            // TODO: render a children
            return (
              <Table.HeaderCell {...TableCellProps} key={`Table.HeaderCell-${id}-${index}`}>
                {CellText}
              </Table.HeaderCell>
            );
          }
          return <div key="null" />;
        })
      );
    }
    return <div />;
  }
}

export default RenderTableHeaderCell;
