import React from 'react';
import { Table } from 'semantic-ui-react';

// interface Props {
// rowSpan?: string;
// colSpan?: string;
// textAlign?: ["centre", "left", "right"];
//     positive?: ["true", "false"];
//     negative?: ["true", "false"];
//     error?: ["true", "false"];
//     warning?: ["true", "false"];
//     active?: ["true", "false"];
//     disabled?: ["true", "false"];
//     selectable?: ["true", "false"];
//     striped?: ["true", "false"];
//     verticalAlign?: ["true", "false"];
//     text?: string;
// }

class TableHeaderCell extends React.PureComponent {
  render() {
    const { text = 'TEST' } = this.props;
    return (
      <Table.HeaderCell {...this.props}>
        {text}
      </Table.HeaderCell>
    );
  }
}

export default TableHeaderCell;
