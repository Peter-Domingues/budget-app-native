import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import ModalDefault from "../../components/Modal";
import CustomTable from "../../components/CustomTable/CustomTable";
import TitleWithButtons from "../../components/TitleWithButtons";
import { useForm, Controller } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import {
  deleteIncoming,
  editIncoming,
  getIncoming,
  postIncoming,
} from "../../api/IncomingApi";
import SnackbarCustom from "../../components/SnackbarCustom/SnackbarCustom";
import { rowItems } from "../../types/ResponseTypes";
import { useSelector, useDispatch } from "react-redux";
import RefreshSlice from "../../store/reducers/RefreshReducer";

const Incoming = () => {
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [snackbarType, setsnackbarType] = useState<String>("");
  const [snackbarText, setSnackbarText] = useState<String>("");
  const [activateDelete, setActivateDelete] = useState<boolean>(false);
  const [currentRowId, setCurrentRowId] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [rows, setRows] = useState<rowItems[]>([]);
  const [total, setTotal] = useState<number>(0);
  const today = new Date();
  const month = today.getMonth() + 1;
  const refreshReducers = useSelector((state: any) => state.refreshReducers);

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

  const getRows = useCallback(async () => {
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
      .catch(() => setIsLoading(false))
      .finally(() => {
        dispatch(RefreshSlice.actions.REFRESH_ALL(false));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getRows();
  }, [refreshReducers.refreshAll]);

  const onDismissSnackBar = () => setShowSnackbar(false);

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
          })
      : await postIncoming(payload)
          .then(() => {
            getRows();
            setShowSnackbar(true);
            setSnackbarText("Conta criada com sucesso");
            setsnackbarType("success");
          })
          .finally(() => {
            reset();
            setOpenModal(false);
            setShowSnackbar(true);
          })
          .catch(() => {
            setsnackbarType("error");
            setSnackbarText("Ocorreu um erro ao criar a conta");
            setShowSnackbar(true);
          });
  };
  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    const formatedDates = selectedDate?.toLocaleDateString("pt-BR");
    setValue("dueDate", formatedDates);
    setOpenDatePicker(false);
    setCurrentDate(selectedDate);
    trigger("dueDate");
  };

  const handleEdit = async (row: any) => {
    setCurrentRowId(row.id);
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

  const onCheck = async (row: rowItems) => {
    const payload = {
      ...row,
      isChecked: !row.isChecked,
    };
    await editIncoming(row.id, payload).then(() => {
      getRows();
    });
  };

  const handleDelete = async (row: rowItems) => {
    await deleteIncoming(row.id)
      .then(() => {
        getRows();
      })
      .finally(() => {
        reset();
        setOpenModal(false);
      });
  };

  return (
    <SafeAreaCustomized isLoading={isLoading}>
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
              renderTextInput={(textInputProps) => (
                // @ts-ignore
                <TextInput
                  accessibilityLabelledBy={undefined}
                  accessibilityLanguage={undefined}
                  {...textInputProps}
                  style={{ backgroundColor: "transparent" }}
                  error={!!error}
                  label="Valor"
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
          // @ts-ignore
          <RNDateTimePicker value={currentDate} onChange={onChange} />
        )}
        <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
      </ModalDefault>
      <CustomTable
        type="renda"
        headerItems={header}
        rows={rows}
        onEdit={handleEdit}
        onCheck={onCheck}
        activateDelete={activateDelete}
        onDelete={handleDelete}
        hideBottomLeft
        total={total}
        quantity={rows.length}
      />
      <SnackbarCustom
        showSnackbar={showSnackbar}
        onDismissSnackBar={onDismissSnackBar}
        snackBarType={snackbarType}
        handleCloseSnackbar={() => setShowSnackbar(false)}
        snackBarText={snackbarText}
      />
    </SafeAreaCustomized>
  );
};

export default Incoming;
