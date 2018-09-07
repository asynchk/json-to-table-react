import React from 'react';
import { Table } from 'semantic-ui-react';

class TableComponent extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Table {...this.props}>
        {children}
      </Table>
    );
  }
}

export default TableComponent;
