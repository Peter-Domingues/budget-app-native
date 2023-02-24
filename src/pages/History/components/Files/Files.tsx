import React, { useState, useEffect, useCallback } from "react";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import TitleWithButtons from "../../../../components/TitleWithButtons";
import SafeAreaCustomized from "../../../../components/SafeAreaCustomized";
import { rowItems } from "../../../../types/ResponseTypes";
import { useSelector, useDispatch } from "react-redux";
import RefreshSlice from "../../../../store/reducers/RefreshReducer";
import { convertMonthToNumber } from "../../../../helpers/ConvertMonth";
import { getSpecificHistory } from "../../../../api/HistoryApi";
import { convertType } from "../../../../helpers/ConvertType";

const Files = ({ route }: any) => {
  const dispatch = useDispatch();
  const hasParams = !!route.params;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [rows, setRows] = useState<rowItems[]>([]);
  const [total, setTotal] = useState<number>(0);

  const refreshReducers = useSelector((state: any) => state.refreshReducers);

  const header = [
    { title: "", isNumeric: false, width: 40 },
    { title: "Fonte", isNumeric: false, width: 115 },
    { title: "Valor", isNumeric: true, width: 70 },
    { title: "Data", isNumeric: false, width: 70 },
  ];

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

  const getRows = useCallback(async () => {
    setIsLoading(true);
    await getSpecificHistory(
      convertMonthToNumber(route.params.month),
      parseInt(route.params.year)
    )
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
            type: convertType(row.type),
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

  return (
    <SafeAreaCustomized isLoading={isLoading}>
      <TitleWithButtons
        title={route.params.month + " " + route.params.year}
        hasBackButton={hasParams}
        hideAdd
      />

      <CustomTable
        type="arquivo"
        headerItems={header}
        rows={rows}
        hideBottomLeft
        total={total}
        quantity={rows.length}
        onlyView
      />
    </SafeAreaCustomized>
  );
};

export default Files;
