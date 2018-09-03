import React from 'react';
// import {
//   Table,
//   // Icon
// } from 'semantic-ui-react';
// import TableCell from './TableCell.Component';
// import { TableContainerProps, Props } from './Table.typings';

import { typeOfObject } from './util';

import TableBodyRenderContainer from './TableBodyRender.Container';
import TableHeaderRenderContainer from './TableHeaderRender.Container';
import { StyledTable } from './StyledTable.Component';


class TableRenderContainer extends React.Component {
  render() {
    // console.log('RenderTable props', this.props.data)
    const { data, id } = this.props;
    const dataType = typeOfObject(data);

    // TODO: array of table
    if (dataType === 'object') {
      return (
        <StyledTable>
          {
                        Object.keys(data).map((key) => {
                          if (key === 'Table.Body') {
                            // console.log('RenderTable key == Table.Body');
                            return <TableBodyRenderContainer key={`${TableBodyRenderContainer}-${id}-${key}`} data={data[key]} id={id} />;
                          }
                          if (key === 'Table.Header') {
                            // console.log('RenderTable key == Table.Header');
                            return <TableHeaderRenderContainer key={`${TableHeaderRenderContainer}-${id}-${key}`} data={data[key]} id={id} />;
                          }
                        })
                    }
        </StyledTable>
      );
    }
    return <div />;
  }
}

export default TableRenderContainer;
