import React from 'react';

import TableHeaderCellRenderContainer from './TableHeaderCellRender.Container';
import TableCellRenderContainer from './TableCellRender.Container';


const renderTableCellTableHeaderCellFromTableRow = (data, id) => (
  Object.keys(data).map((k, index) => {
    // console.log('RenderTableRow each item key is', k)
    if (k === 'Table.HeaderCell') {
      // STOP
      // console.log('RenderTableRow item Table.HeaderCell', data[k])
      return <TableHeaderCellRenderContainer key={`renderTableCellTableHeaderCellFromTableRowTableHeaderCellRenderContainer-${id}-${k}`} data={data[k]} id={id} />;
    }
    if (k === 'Table.Cell') {
      // console.log('RenderTableRow item Table.Cell', data[k])
      return <TableCellRenderContainer key={`renderTableCellTableHeaderCellFromTableRowTableCellRenderContainer-${id}-${k}`} data={data[k]} id={`${id}-${index}`} />;
    }
  })
);

export default renderTableCellTableHeaderCellFromTableRow;
