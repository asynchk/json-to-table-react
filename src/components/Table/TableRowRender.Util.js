import React from 'react';

// import * as tableData from './tabledatasample.json';
// import { Table, Icon } from 'semantic-ui-react';
// import TableCell from './TableCell.Component';
// import { TableContainerProps, Props } from './Table.typings';

import TableRowRenderContainer from './TableRowRender.Container';


const renderTableRowFromTableHeaderBody = (data, id, isTableBody) => (
  Object.keys(data).map((key, index) => {
    if (key === 'Table.Row') {
      // console.log("key == 'Table.Row'")\
      const ket = `TableTowRenderContainer-isTableBody-${id}-${key}-${index}`;
      console.log(ket, data);
      console.log(index);
      if (isTableBody) { return <TableRowRenderContainer key={`renderTableRowFromTableHeaderBody-isTableBody-${id}-${key}-${index}`} data={data[key]} id={`isTableBody-${id}-${index}`} />; }

      return <TableRowRenderContainer key={`renderTableRowFromTableHeaderBody-isTableHead-${id}-${key}-${index}`} data={data[key]} id={`isTableHead-${id}-${index}`} />;
    }

    // TODO: other type in Table Body
    return <div key={`renderTableRowFromTableHeaderBodydiv-${id}-${key}-${index}`} />;
  })
);

export default renderTableRowFromTableHeaderBody;
