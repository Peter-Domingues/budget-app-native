import RNDateTimePicker from "@react-native-community/datetimepicker";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import ModalDefault from "../../components/Modal";
import Table from "../../components/Table";
import TitleWithButtons from "../../components/TitleWithButtons";
import Teste from "./styles";
import { useForm, Controller } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";

const Incoming = () => {
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [activateDelete, setActivateDelete] = useState(false);

  const header = [
    { title: "", isNumeric: false },
    { title: "Fonte", isNumeric: false },
    { title: "Valor", isNumeric: true },
    { title: "Data", isNumeric: false },
    { title: "", isNumeric: false },
  ];
  const [rows, setRows] = useState([
    { font: "Agua", amount: 200, dueDate: "01/16/23", isChecked: true },
    { font: "Luz", amount: 450, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 120, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Fonte", amount: 200, dueDate: "01/16/23", isChecked: false },
    { font: "Teste", amount: 200, dueDate: "01/16/23", isChecked: false },
  ]);

  const { control, handleSubmit, reset, setValue, trigger } = useForm({
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
    const currentDate = selectedDate.toLocaleDateString("pt-BR");
    setValue("dueDate", currentDate);
    setOpenDatePicker(false);
    setDate(selectedDate);
    trigger("dueDate");
  };

  const handleEdit = async (row) => {
    console.log(row);
    setValue("font", row.font);
    setValue("amount", row.amount.toString());
    setValue("dueDate", row.dueDate);
    setEdit(true);
    setOpenModal(true);
  };

  const handleAdd = () => {
    setOpenModal(true);
  };

  const handleCancel = () => {
    reset();
    setOpenModal(false);
  };

  const onCheck = async (index) => {
    const newRows = [...rows];
    newRows[index].isChecked = !newRows[index].isChecked;
    setRows(newRows);
  };

  const handleDelete = async (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  return (
    <SafeAreaCustomized>
      <TitleWithButtons
        title="Renda"
        onAdd={handleAdd}
        onDelete={() => setActivateDelete(!activateDelete)}
        activateDelete={activateDelete}
      />
      <ModalDefault open={openModal} onDismiss={handleCancel}>
        <Text style={Teste.title}>Add sua renda</Text>
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
        <Controller
          name="dueDate"
          rules={{ required: true }}
          control={control}
          render={({ field: { value }, fieldState: { error } }) => (
            <TextInput
              label="Vencimento"
              error={!!error}
              value={value}
              onFocus={() => setOpenDatePicker(true)}
              style={{ backgroundColor: "transparent" }}
            />
          )}
        />

        {openDatePicker && (
          <RNDateTimePicker value={date} onChange={onChange} />
        )}
        <Button type="submit" onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </ModalDefault>
      <Table
        header={header}
        rows={rows}
        onEdit={handleEdit}
        onCheck={onCheck}
        activateDelete={activateDelete}
        onDelete={handleDelete}
      />
    </SafeAreaCustomized>
  );
};

export default Incoming;
