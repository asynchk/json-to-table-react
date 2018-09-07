import React from 'react';
import { storiesOf } from '@storybook/react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import TableContainer from './Table.Container';
import TableData from './tabledatasample.json';

// import { log } from 'util';

storiesOf('Table', module)
  .add('Table Container', () => (
    <TableContainer data={TableData} />
  ))
  .add('Table Container With GQL Wrapper', () => (
    <TableContainerQuery widgetId="8fc3e3d3-bf8c-4175-9739-7ca56e55bb30" startFrom="" startTo="" />
  ));
// 8fc3e3d3-bf8c-4175-9739-7ca56e55bb30
const TableContainerQuery = ({ widgetId, startFrom, startTo }) => (
  <Query
    query={GET_WIDGET_DATA}
    variables={{ widgetId, startFrom, startTo }}
    errorPolicy="all"
  // pollInterval="5000"
  >
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <div className="ui loader">Loading......</div>;
        }
        if (error) {
          console.log(error);

          return (
            <div className="ui error message">
Error:
              {' '}
              {error.graphQLErrors.map(({ message }, i) => (
                <span key={i}>{message}</span>
              ))}
            </div>
          );
        }
        console.log('data', data);

        if (!data.WidgetData) {
          return (<div className="ui warning message">No data found</div>);
        }
        return <TableContainer key={data.WidgetData.id} data={JSON.parse(data.WidgetData.value)} />;
      }
    }
  </Query>
);

const GET_WIDGET_DATA = gql`
          query WidgetData($widgetId: ID!, $startFrom: String!, $startTo: String!) {
            WidgetData(
              widgetId: $widgetId,
              startFrom: $startFrom,
              startTo: $startTo
          ) {
              id
              tenant_id
              site_id
              value
            }
          }
      `;
