import * as React from "react";
import { ScrollView, View } from "react-native";
import { IconButton, Checkbox, Text } from "react-native-paper";
import TableStyles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";

interface headerItems {
  title: String;
  isNumeric: boolean;
  width: number;
}

interface rowItems {
  font: String;
  amount: number;
  dueDate: String;
  isChecked: boolean;
}

interface CustomTableProps {
  headerItems: headerItems[];
  rows: rowItems[];
  onEdit: any;
  onCheck: any;
  activateDelete: boolean;
  onDelete: any;
  isTotalRed?: boolean;
  total: number;
  bottomRightLabel?: String;
  isBottomRightRed?: boolean;
  quantity: number;
  hideBottomLeft?: boolean;
}

interface HeaderProps {
  headerItems: headerItems[];
}

interface CellProps {
  cellWidth: number;
  children: any;
}

interface RowProps {
  children: any;
}

interface BottomProps {
  children: any;
}

const CustomTable: React.FC<CustomTableProps> = ({
  headerItems,
  rows,
  onEdit,
  onCheck,
  activateDelete,
  onDelete,
  isTotalRed,
  total,
  bottomRightLabel,
  isBottomRightRed,
  quantity,
  hideBottomLeft,
}) => {
  const Header: React.FC<HeaderProps> = ({ headerItems }) => {
    return (
      <View style={[TableStyles.greenRow, TableStyles.header]}>
        <ScrollView horizontal>
          {headerItems.map((item, index) => (
            <Text
              key={index}
              style={[
                TableStyles.rowItem,
                {
                  width: item.width,
                },
              ]}
            >
              {item.title}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  };
  const Bottom: React.FC<BottomProps> = ({ children }) => {
    return <View style={[TableStyles.greenRow]}>{children}</View>;
  };

  const Cell: React.FC<CellProps> = ({ cellWidth, children }) => {
    return (
      <View
        style={[
          TableStyles.cell,
          {
            width: cellWidth,
          },
        ]}
      >
        {children}
      </View>
    );
  };

  const Row: React.FC<RowProps> = ({ children }) => {
    return <View style={TableStyles.fontView}>{children}</View>;
  };

  return (
    <View style={TableStyles.container}>
      <Header headerItems={headerItems} />
      <ScrollView>
        {rows.map((row, index) => (
          <Row key={index}>
            <Cell cellWidth={120}>
              <View style={TableStyles.fontView}>
                {activateDelete ? (
                  <IconButton
                    icon={() => (
                      <MaterialIcons
                        name="delete-forever"
                        color={Colors.red}
                        size={26}
                        accessibilityLabelledBy={undefined}
                        accessibilityLanguage={undefined}
                      />
                    )}
                    style={TableStyles.icon}
                    size={20}
                    onPress={() => onDelete(index)}
                    accessibilityLabelledBy={undefined}
                    accessibilityLanguage={undefined}
                  />
                ) : (
                  <Checkbox
                    status={row.isChecked ? "checked" : "unchecked"}
                    onPress={() => onCheck(index)}
                  />
                )}
                <Text
                  style={[
                    row.isChecked && TableStyles.crossedTitle,
                    { maxWidth: 80 },
                  ]}
                >
                  {row.font}
                </Text>
              </View>
            </Cell>
            <Cell cellWidth={75}>
              <Text>R${row.amount}</Text>
            </Cell>
            <Cell cellWidth={75}>
              <Text>{row.dueDate}</Text>
            </Cell>
            <Cell cellWidth={50}>
              <IconButton
                icon={() => (
                  <MaterialIcons
                    name="edit"
                    color={Colors.green100}
                    size={26}
                  />
                )}
                size={20}
                onPress={() => onEdit(row)}
                accessibilityLabelledBy={undefined}
                accessibilityLanguage={undefined}
              />
            </Cell>
          </Row>
        ))}
      </ScrollView>
      <Bottom>
        <View style={TableStyles.row}>
          <View style={TableStyles.centerText}>
            <Text style={TableStyles.whiteText}>Total:</Text>
          </View>
          <View style={TableStyles.bottomWhiteCard}>
            <Text
              style={isTotalRed ? TableStyles.redText : TableStyles.greenText}
            >
              {isTotalRed && "-"}R${total}
            </Text>
          </View>
        </View>
        {!hideBottomLeft && (
          <View style={TableStyles.row}>
            <View style={TableStyles.centerText}>
              <Text style={TableStyles.whiteText}>{bottomRightLabel}:</Text>
            </View>

            <View style={TableStyles.bottomWhiteCard}>
              <Text
                style={
                  isBottomRightRed ? TableStyles.redText : TableStyles.greenText
                }
              >
                {quantity}
              </Text>
            </View>
          </View>
        )}
      </Bottom>
    </View>
  );
};

export default CustomTable;
