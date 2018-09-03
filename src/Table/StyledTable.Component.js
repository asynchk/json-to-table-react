import {
  Table,
} from 'semantic-ui-react';

import styled from 'styled-components';

export const StyledTable = styled(Table)`
    //border: ${props => props.theme.tableBorderColor}!important;
    background-color: ${props => props.theme.background.tableBackground}!important;
    text-shadow: null;
    color: ${props => props.theme.tableFontColor}!important;
`;

export const TableHeader = styled(Table.Header)`
    border: ${props => props.theme.tableBorderColor}!important;
    background-color: ${props => props.theme.background.tableHeaderBackground}!important;
    text-shadow: #000!important;
    color: ${props => props.theme.tableFontColor}!important;
`;

export const TableBody = styled(Table.Body)`
`;

export const TableRow = styled(Table.Row)`
    border: ${props => props.theme.tableBorderColor}!important;
    color: ${props => props.theme.tableFontColor}!important;
`;

export const TableCell = styled(Table.Cell)`
    border-top-width: 0px;
    // border: ${props => props.theme.tableBorderColor}!important;
    border-top: none;
    background-color: ${props => props.theme.positive ? '#a8ffaa'
    : props.theme.negative ? '#ff5a57'
    : props.theme.background.tableBackground}!important;
    color: ${props => props.theme.tableFontColor}!important;
`;

export const TableHeaderCell = TableCell.withComponent(Table.HeaderCell);
