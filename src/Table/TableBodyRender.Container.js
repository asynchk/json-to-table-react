import React from 'react';

// import * as tableData from './tabledatasample.json';
import {
  Table,
  // Icon
} from 'semantic-ui-react';
// import TableCell from './TableCell.Component';
// import { TableContainerProps, Props } from './Table.typings';

import { typeOfObject } from './util';

import renderTableRowFromTableHeaderBody from './TableRowRender.Util';
import { TableBody } from './StyledTable.Component';


class TableBodyRenderContainer extends React.Component {
  render() {
    const { data, id } = this.props;
    const dataType = typeOfObject(data);
    if (dataType === 'object') {
      return (
        <TableBody>
          {
                        renderTableRowFromTableHeaderBody(data, id, true)
                    }
        </TableBody>
      );
    }
    return <div />;
  }
}

export default TableBodyRenderContainer;
