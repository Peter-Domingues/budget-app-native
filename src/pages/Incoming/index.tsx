import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import ModalDefault from "../../components/Modal";
import Table from "../../components/Table";
import TitleWithButtons from "../../components/TitleWithButtons";
import { useForm, Controller } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import { getIncoming, postIncoming } from "../../api/IncomingApi";
interface Row {
  id: string;
  font: string;
  amount: Number;
  dueDate: string;
  isChecked: boolean;
}
const Incoming = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [activateDelete, setActivateDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const today = new Date();
  const month = today.getMonth() + 1;
  const formatedDate = currentDate?.toLocaleDateString("pt-BR");

  const header = [
    { title: "", isNumeric: false },
    { title: "Fonte", isNumeric: false },
    { title: "Valor", isNumeric: true },
    { title: "Data", isNumeric: false },
    { title: "", isNumeric: false },
  ];
  const [rows, setRows] = useState<Array<Row>>([]);

  const { control, handleSubmit, reset, setValue, trigger } = useForm({
    defaultValues: {
      font: "",
      amount: 0,
      dueDate: "",
    },
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

  const getRows = async () => {
    setIsLoading(true);
    await getIncoming(month)
      .then((res) => {
        let newRows: Array<Row> = [];
        res.data.map((row: Row) =>
          newRows.push({
            id: row.id,
            font: row.font,
            amount: row.amount,
            dueDate: formatDate(row.dueDate),
            isChecked: row.isChecked,
          })
        );
        setRows(newRows);
        setIsLoading(false);
      })
      .finally(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRows();
  }, []);

  const onSubmit = async (data: any) => {
    console.log(data.dueDate);
    const payload = {
      font: data.font,
      amount: parseInt(data.amount),
      dueDate: currentDate,
      isChecked: false,
    };
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
    await postIncoming(payload)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  const onChange = (event: DateTimePickerEvent, date?: Date) => {
    setValue("dueDate", formatedDate);
    setOpenDatePicker(false);
    setCurrentDate(date || new Date());
    trigger("dueDate");
  };

  const handleEdit = async (row: any) => {
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

  const onCheck = async (index: number) => {
    const newRows = [...rows];
    newRows[index].isChecked = !newRows[index].isChecked;
    setRows(newRows);
  };

  const handleDelete = async (index: number) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  return isLoading ? (
    <></>
  ) : (
    <SafeAreaCustomized>
      <TitleWithButtons
        title="Renda"
        onAdd={handleAdd}
        onDelete={() => setActivateDelete(!activateDelete)}
        activateDelete={activateDelete}
      />
      <ModalDefault open={openModal} onDismiss={handleCancel}>
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
              style={{ backgroundColor: "transparent" }}
              accessibilityLabelledBy={undefined}
              accessibilityLanguage={undefined}
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
              precision={2}
              renderTextInput={(props) => (
                <TextInput
                  {...props}
                  accessibilityLabelledBy={undefined}
                  accessibilityLanguage={undefined}
                  style={{ backgroundColor: "transparent" }}
                  label="Valor"
                  error={!!error}
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
              accessibilityLabelledBy={undefined}
              accessibilityLanguage={undefined}
            />
          )}
        />

        {openDatePicker && (
          <RNDateTimePicker value={currentDate} onChange={onChange} />
        )}
        <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
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
