import React from 'react';
import {
  Table,
} from 'semantic-ui-react';
import { typeOfObject } from './util';

import renderTableCellTableHeaderCellFromTableRow from './TableCellRender.Util';
import { TableRow } from './StyledTable.Component';



class TableRowRenderContainer extends React.Component {
  render() {
    const { data, id } = this.props;
    const dataType = typeOfObject(data);
    if (dataType === 'object') {
      return (
        <TableRow>
          {
                        renderTableCellTableHeaderCellFromTableRow(data, id)
                    }
        </TableRow>
      );
    }
    if (dataType === 'array') {
      // console.log("RenderTableRow dataType == 'array'")
      return data.map((d, index) => {
        // const dataType = typeOfObject(d);
        if (typeOfObject(d) === 'object') {
          // console.log("RenderTableRow dataType == 'array', then each item is object", d)
          return (
            <TableRow
              key={`TableRowRenderContainer-${id}-${index}`}
            >
              {renderTableCellTableHeaderCellFromTableRow(d, id)}
            </TableRow>
          );
        }
        return <div key="null" />;
      });
    }
    return <div />;
  }
}

export default TableRowRenderContainer;
