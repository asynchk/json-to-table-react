import React from 'react';
import {
  Table,
  // Icon
} from 'semantic-ui-react';
// import TableCell from './TableCell.Component';
// import { TableContainerProps, Props } from './Table.typings';

import { typeOfObject } from './util';

import renderTableRowFromTableHeaderBody from './TableRowRender.Util';
import { TableHeader } from './StyledTable.Component';

class TableHeaderRenderContainer extends React.Component {
  render() {
    const { data, id } = this.props;
    const dataType = typeOfObject(data);
    if (dataType === 'object') {
      return (
        <TableHeader>
          {
                        renderTableRowFromTableHeaderBody(data, id, false)
                    }
        </TableHeader>
      );
    }
    return <div />;
  }
}

export default TableHeaderRenderContainer;
