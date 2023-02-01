import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import ModalDefault from "../../components/Modal";
import TitleWithButtons from "../../components/TitleWithButtons";
import { useForm, Controller } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import { editIncoming, getIncoming, postIncoming } from "../../api/IncomingApi";
import CustomTable from "../../components/CustomTable";
interface rowItems {
  id: string;
  font: String;
  amount: number;
  dueDate: String;
  isChecked: boolean;
}
const Incoming = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [activateDelete, setActivateDelete] = useState(false);
  const [currentRowId, setCurrentRowId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<Array<rowItems>>([]);
  const [total, setTotal] = useState<number>(0);
  const today = new Date();
  const month = today.getMonth() + 1;
  const formatedDate = currentDate?.toLocaleDateString("pt-BR");
  const header = [
    { title: "Fonte", isNumeric: false, width: 100 },
    { title: "Valor", isNumeric: true, width: 70 },
    { title: "Data", isNumeric: false, width: 70 },
    { title: "", isNumeric: false, width: 20 },
  ];
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
        console.log(res);
        let newRows: Array<rowItems> = [];
        res.data.result.map((row: any) =>
          newRows.push({
            id: row._id,
            font: row.font,
            amount: row.amount,
            dueDate: formatDate(row.dueDate),
            isChecked: row.isChecked,
          })
        );
        setRows(newRows);
        setIsLoading(false);
        setTotal(res.data.Total);
      })
      .finally(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRows();
  }, []);

  const onSubmit = async (data: any) => {
    const payload = {
      font: data.font,
      amount: parseInt(data.amount),
      dueDate: currentDate,
      isChecked: false,
      type: "incoming",
    };

    edit
      ? await editIncoming(currentRowId, payload)
          .then(() => {
            getRows();
          })
          .finally(() => {
            setEdit(false);
            reset();
            setOpenModal(false);
          })
      : await postIncoming(payload)
          .then((res) => {
            getRows();
          })
          .finally(() => {
            reset();
            setOpenModal(false);
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
    setCurrentRowId(row.id);
    setValue("font", row.font);
    setValue("amount", row.amount?.toString());
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
                // @ts-ignore
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
      <CustomTable
        headerItems={header}
        rows={rows}
        total={total}
        onEdit={handleEdit}
        onCheck={onCheck}
        activateDelete={activateDelete}
        onDelete={handleDelete}
        quantity={rows.length}
        hideBottomLeft={true}
      />
    </SafeAreaCustomized>
  );
};

export default Incoming;
