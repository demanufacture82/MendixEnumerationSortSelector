import { ReactElement, createElement } from "react";
import { EnumerationSortSelectorPreviewProps } from "../typings/EnumerationSortSelectorProps";

export function preview(props: EnumerationSortSelectorPreviewProps): ReactElement {
    return (
        <select className="form-control" disabled>
            <option>{props.sortMode === "key" ? "Enumeration options sorted by key" : "Enumeration options sorted by localized caption"}</option>
        </select>
    );
}

export function getPreviewCss(): string {
    return require("./ui/EnumerationSortSelector.css");
}
