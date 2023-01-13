import * as React from "react";
import { ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import TableStyles from "./styles";

const optionsPerPage = [2, 3, 4];

const Table = (props) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header style={TableStyles.header}>
        {props.header.map((headerItem) => (
          <DataTable.Title textStyle={TableStyles.headerText}>
            {headerItem.title}
          </DataTable.Title>
        ))}
      </DataTable.Header>
      <ScrollView style={TableStyles.maxScroll}>
        {props.rows.map((row) => {
          return (
            <DataTable.Row>
              <DataTable.Cell>{row.fonte}</DataTable.Cell>
              <DataTable.Cell>{row.valor}</DataTable.Cell>
              <DataTable.Cell>{row.data}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </ScrollView>
    </DataTable>
  );
};

export default Table;
