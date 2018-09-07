import React from 'react';
import { Table } from 'semantic-ui-react';


class TableHeaderComponent extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Table.Header>
        {children}
      </Table.Header>
    );
  }
}

export default TableHeaderComponent;
