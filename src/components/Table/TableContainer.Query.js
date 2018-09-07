import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { fromgql } from '../../dumps/sampledata';
import TableWidgetContainer from '../Widget/TableWidget.Container';

const GET_WIDGET_DATA_VALUE = gql`
query WidgetData($widgetId: ID!, $startFrom: String!, $startTo: String!) {
  WidgetData(widgetId: $widgetId, startFrom: $startFrom, startTo: $startTo) {
    id
    value
  }
}
`;

const TableContainerQuery = ({
  widgetId, startFrom, startTo, pollingInterval, title
}) => {
  return (

    <Query
      query={GET_WIDGET_DATA_VALUE}
      variables={{
        widgetId,
        startFrom,
        startTo,
      }}
      errorPolicy="all"
      fetchPolicy="cache-and-network"
      pollInterval={pollingInterval}
    >
      {
      ({
        loading, error, data, networkStatus,
      }) => {
        if (loading && networkStatus !== 6) {
          <TableWidgetContainer title={title} />
        }
        if (error && process.env.REACT_APP_ENABLE_GRAPHQL === 'false') {
          return (
            <TableWidgetContainer data={fromgql.data} title={title}/>
          );
        }
        if (data && !data.WidgetData) {
          return (<TableWidgetContainer data={null} title={title}/>);
        }
        console.log(data.WidgetData)
        return <TableWidgetContainer data={data} title={title}/>;
      }
    }
    </Query>
  );
};

TableContainerQuery.defaultProps = {
  startFrom: '',
  startTo: '',
};
export default TableContainerQuery;
