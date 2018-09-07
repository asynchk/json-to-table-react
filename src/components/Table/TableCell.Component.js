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

// interface Props {
//     rowSpan?: string;
//     colSpan?: string;
//     textAlign?: "center"|"left"|"right";
//     positive?: boolean;
//     negative?: boolean;
//     error?: boolean;
//     warning?: boolean;
//     active?: boolean;
//     disabled?: boolean;
//     selectable?: boolean;
//     striped?: boolean;
//     verticalAlign?: "top" | "middle" | "bottom";
//     text?: string;
//     children?: any;
// }

class TableCell extends React.PureComponent {
  render() {
    // console.log('rendering Table Cell with props', this.props);
    const { text = 'TEST' } = this.props;
    return (
      <Table.Cell {...this.props}>
        {text}
      </Table.Cell>
    );
  }
}

export default TableCell;
