import { Properties, Problem } from "@mendix/pluggable-widgets-tools";
import { EnumerationSortSelectorPreviewProps } from "../typings/EnumerationSortSelectorProps";

export function getProperties(values: EnumerationSortSelectorPreviewProps, defaultProperties: Properties): Properties {
    return defaultProperties;
}

export function check(values: EnumerationSortSelectorPreviewProps): Problem[] {
    const errors: Problem[] = [];
    if (!values.enumerationAttribute) {
        errors.push({ property: "enumerationAttribute", message: "Select an enumeration attribute." });
    }
    return errors;
}
