import * as React from "react";
import { ScrollView } from "react-native";
import { DataTable } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const Table = (props) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        {props.header.map((headerItem) => (
          <DataTable.Title numeric={headerItem.isNumeric}>
            {headerItem.title}
          </DataTable.Title>
        ))}
      </DataTable.Header>
      <ScrollView>
        {props.rows.map((row) => {
          return (
            <DataTable.Row>
              <DataTable.Cell>{row.fonte}</DataTable.Cell>
              <DataTable.Cell numeric>{row.valor}</DataTable.Cell>
              <DataTable.Cell>{row.data}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </ScrollView>
    </DataTable>
  );
};

export default Table;
