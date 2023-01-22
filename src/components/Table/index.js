import * as React from "react";
import { ScrollView, View } from "react-native";
import { DataTable, IconButton, Checkbox, Text } from "react-native-paper";
import TableStyles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";

const Table = (props) => {
  return (
    <DataTable style={TableStyles.maxHeightTable}>
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
              <DataTable.Cell>
                {props.activateDelete ? (
                  <View>
                    <IconButton
                      icon={() => (
                        <MaterialIcons
                          name="delete-forever"
                          color={Colors.red}
                          size={26}
                        />
                      )}
                      size={20}
                      onPress={() => props.onDelete(index)}
                    />
                  </View>
                ) : (
                  <Checkbox
                    status={row.isChecked ? "checked" : "unchecked"}
                    onPress={() => props.onCheck(index)}
                  />
                )}
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={row.isChecked && TableStyles.crossedTitle}>
                  {row.font}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>R${row.amount}</DataTable.Cell>
              <DataTable.Cell>{row.dueDate}</DataTable.Cell>
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
                  onPress={() => props.onEdit(row)}
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
