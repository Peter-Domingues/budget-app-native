import RNDateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import ModalDefault from "../../componets/Modal";
import Table from "../../componets/Table";
import TitleWithButtons from "../../componets/TitleWithButtons";
import IncomingStyles from "./styles";

const optionsPerPage = [2, 3, 4];

const Incoming = () => {
  const [page, setPage] = React.useState(0);
  const [text, setText] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  const header = [
    { title: "Fonte", isNumeric: false },
    { title: "Valor", isNumeric: true },
    { title: "Data", isNumeric: false },
    { title: "", isNumeric: false },
  ];
  const rows = [
    { fonte: "Agua", valor: 200, data: "1213" },
    { fonte: "Luz", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Teste", valor: 200, data: "1213" },
  ];

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const [show, setShow] = useState(false);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <SafeAreaView style={IncomingStyles.container}>
      <View style={IncomingStyles.view}>
        <TitleWithButtons title="Renda" />
        {/* <ModalDefault open={openModal} onDismiss={() => setOpenModal(false)}>
          <Text>Add sua renda</Text>
          <TextInput
            label="Fonte"
            value={text}
            onChangeText={(text) => setText(text)}
            style={{ backgroundColor: "transparent", paddingBottom: 10 }}
          />
          <TextInput
            label="Valor"
            value={text}
            onChangeText={(text) => setText(text)}
            style={{ backgroundColor: "transparent" }}
          />
        </ModalDefault> */}
        {/* <Table header={header} rows={rows} onEdit={() => setOpenModal(true)} /> */}
        <RNDateTimePicker value={new Date()} />
      </View>
    </SafeAreaView>
  );
};

export default Incoming;
