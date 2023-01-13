import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import Table from "../../componets/Table";
import TitleWithButtons from "../../componets/TitleWithButtons";
import IncomingStyles from "./styles";

const optionsPerPage = [2, 3, 4];

const Incoming = () => {
  const [page, setPage] = React.useState(0);
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

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <SafeAreaView style={IncomingStyles.container}>
      <TitleWithButtons title="Renda" />
      <Table header={header} rows={rows} />
    </SafeAreaView>
  );
};

export default Incoming;
