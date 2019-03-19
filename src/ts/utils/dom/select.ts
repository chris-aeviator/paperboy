/*** require select ***/
const defaultNone = document.createElement("option");
defaultNone.selected = false;
defaultNone.disabled = true;
defaultNone.hidden = false;
defaultNone.style.display = "none";
defaultNone.value = "";

/*** build a select ***/
export
function buildSelect(name: string,
                     list: string[],
                     def?: string,
                     required = false,
                     readonly = false): HTMLSelectElement {
  const select = document.createElement("select");
  select.name = name;
  if (required) {
    select.required = required;
  }
  if (readonly) {
    select.disabled = true;
  }

  select.appendChild(defaultNone);
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < list.length; i++) {
    const x = list[i];
    const option = document.createElement("option");
    option.value = x;
    option.textContent = x;
    select.appendChild(option);

    if (def && x === def) {
      option.selected = true;
    }
  }
  select.style.marginBottom = "15px";
  select.style.minHeight = "25px";
  return select;
}
