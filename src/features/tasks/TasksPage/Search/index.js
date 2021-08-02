import Input from "../../Input";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Fieldset } from "../Form/styled";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({target}) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Fieldset>
    <Input
      placeholder="Filtruj zadania"
      value={query || ""}
      onChange={onInputChange}
    />
    </Fieldset>
  )
};