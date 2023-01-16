import * as React from "react";
import { ScrollView, View } from "react-native";
import { DataTable, IconButton } from "react-native-paper";
import TableStyles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";

const Table = (props) => {
  return (
    <DataTable>
      <DataTable.Header style={TableStyles.header}>
        {props.header.map((headerItem, index) => (
          <DataTable.Title key={index} textStyle={TableStyles.headerText}>
            {headerItem.title}
          </DataTable.Title>
        ))}
      </DataTable.Header>
      <ScrollView style={TableStyles.maxScroll}>
        {props.rows.map((row, index) => {
          return (
            <DataTable.Row pointerEvents="auto" key={index}>
              <DataTable.Cell>{row.fonte}</DataTable.Cell>
              <DataTable.Cell>{row.valor}</DataTable.Cell>
              <DataTable.Cell>{row.data}</DataTable.Cell>
              <View>
                <IconButton
                  icon={() => (
                    <MaterialIcons
                      name="edit"
                      color={Colors.green100}
                      size={26}
                    />
                  )}
                  size={20}
                  onPress={props.onEdit}
                />
              </View>
            </DataTable.Row>
          );
        })}
      </ScrollView>
    </DataTable>
  );
};

export default Table;
