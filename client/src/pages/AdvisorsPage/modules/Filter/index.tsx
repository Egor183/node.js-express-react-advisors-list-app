import React, { memo } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useChangeCurrentAdvisorsList } from "./hooks/useChangeCurrentAdvisorsList.hook";
import FilterForm from "./modules/FilterForm";
import SelectStatus from "./modules/SelectStatus";
import { handleChangeSelect, handleFilterForm } from "./helpers/filter.helpers";

import styles from "./styles.module.css";

const Filter = () => {
  const isLoading = useSelector(
    (state: RootStateOrAny) => state.loading.isLoading
  );

  const handleSelectCurrentAdvisorsList = useChangeCurrentAdvisorsList(
    handleChangeSelect,
    false
  );

  const handleFilterCurrentAdvisorsList =
    useChangeCurrentAdvisorsList(handleFilterForm);

  return (
    <div className={isLoading ? styles.disabledContent : undefined}>
      <div>
        <SelectStatus onChange={handleSelectCurrentAdvisorsList} />
      </div>
      <div className={styles.filterFormContainer}>
        <FilterForm onSubmit={handleFilterCurrentAdvisorsList} />
      </div>
    </div>
  );
};

export default memo(Filter);
