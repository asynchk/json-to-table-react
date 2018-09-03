import React from 'react';

// import * as tableData from './tabledatasample.json';
import { Table } from 'semantic-ui-react';
import TableCell from './TableCell.Component';
// import { TableContainerProps, Props } from './Table.typings';
import { typeOfObject } from './util';

import tableElementRenderUtil from './TableElementRender.Util';


class TableCellRenderContainer extends React.Component {
  render() {
    const { data, id } = this.props;
    const dataType = typeOfObject(data);
    // console.log('RenderTableCell. datatype is ', dataType)
    if (dataType === 'array') {
      // console.log('RenderTableCell dataType == "array"');
      return (
        data.map((d, index) => {
          const subdataType = typeOfObject(d);
          // console.log('RenderTableCell single data', d)
          if (subdataType === 'string') {
            return (
              <TableCell
                key={`TableCellRenderContainer-${id}-${index}`}
                text={d}
              >
                {d}
              </TableCell>
            );
          }
          if (subdataType === 'object') {
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
            // TODO: render a children
            // console.log('TableCellProps', TableCellProps);
            return (
              <Table.Cell
                {...TableCellProps}
                key={`TableCellRenderContainer-${id}-${index}`}
              >
                {CellText}
              </Table.Cell>
            );
          }
        })
      );
    }
    return <div />;
  }
}

export default TableCellRenderContainer;
