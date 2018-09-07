import React from 'react';

import { Table } from 'semantic-ui-react';

class TableBodyComponent extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Table.Body>
        {children}
      </Table.Body>
    );
  }
}

export default TableBodyComponent;
