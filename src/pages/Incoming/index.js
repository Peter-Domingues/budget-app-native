import RNDateTimePicker from "@react-native-community/datetimepicker";
import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import ModalDefault from "../../componets/Modal";
import Table from "../../componets/Table";
import TitleWithButtons from "../../componets/TitleWithButtons";
import IncomingStyles from "./styles";
import { useForm, Controller, useController } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";

const optionsPerPage = [2, 3, 4];

const Incoming = () => {
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
  const header = [
    { title: "Fonte", isNumeric: false },
    { title: "Valor", isNumeric: true },
    { title: "Data", isNumeric: false },
    { title: "", isNumeric: false },
  ];
  const rows = [
    { font: "Agua", amount: 200, data: "1213" },
    { font: "Luz", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Fonte", amount: 200, data: "1213" },
    { font: "Teste", amount: 200, data: "1213" },
  ];

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      font: "",
      amount: "",
      dueDate: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    // const payload = {
    //   font: data.font,
    //   value: parseInt(data.money),
    //   date: data.dueDate,
    //   isChecked: false,
    //   recurrent: data.recurrent,
    // };
    // edit
    //   ? await editRow(currentRowId, payload)
    //       .then(() => {
    //         init();
    //       })
    //       .finally(() => {
    //         setAddNewIncoming(false);
    //         setEdit(false);
    //         reset();
    //       })
    //   : await postRow(payload)
    //       .then(() => {
    //         init();
    //       })
    //       .finally(() => {
    //         setAddNewIncoming(false);
    //         reset();
    //       });
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setOpenDatePicker(false);
    setDate(currentDate);
  };

  const handleEdit = async (row) => {
    console.log(row);
    setValue("font", row.font);
    setValue("amount", row.amount.toString());
    setEdit(true);
    // setCurrentRowId(row.id);
    setOpenModal(true);
  };

  return (
    <SafeAreaView style={IncomingStyles.container}>
      <View style={IncomingStyles.view}>
        <TitleWithButtons title="Renda" />
        <ModalDefault open={openModal} onDismiss={() => setOpenModal(false)}>
          <Text>Add sua renda</Text>
          <Controller
            name="font"
            rules={{ required: true }}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                label="Fonte"
                error={!!error}
                helperText={error && error.message}
                style={{ backgroundColor: "transparent" }}
              />
            )}
          />
          <Controller
            name="amount"
            rules={{ required: true }}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              // <TextInput
              //   onChangeText={onChange}
              //   value={value}
              //   label="Valor"
              //   error={!!error}
              //   helperText={error && error.message}
              //   style={{ backgroundColor: "transparent" }}
              // />
              <CurrencyInput
                value={value}
                onChangeValue={onChange}
                prefix="R$"
                delimiter="."
                separator=","
                error={!!error}
                label="Valor"
                precision={2}
                renderTextInput={(textInputProps) => (
                  <TextInput
                    {...textInputProps}
                    style={{ backgroundColor: "transparent" }}
                  />
                )}
              />
            )}
          />

          <TextInput
            label=""
            value={date.toLocaleDateString("pt-BR")}
            onFocus={() => setOpenDatePicker(true)}
            style={{ backgroundColor: "transparent" }}
          />
          {openDatePicker && (
            <RNDateTimePicker
              value={date}
              onChange={onChange}
              dateFormat="dayofweek day month"
            />
          )}
          <Button type="submit" onPress={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </ModalDefault>
        <Table header={header} rows={rows} onEdit={handleEdit} />
      </View>
    </SafeAreaView>
  );
};

export default Incoming;
