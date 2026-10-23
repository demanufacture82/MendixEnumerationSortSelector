import { ReactElement, createElement, useMemo } from "react";
import classNames from "classnames";
import { EnumerationSortSelectorContainerProps } from "../typings/EnumerationSortSelectorProps";
import "./ui/EnumerationSortSelector.css";

type Option = { key: string; caption: string };

export function EnumerationSortSelector(props: EnumerationSortSelectorContainerProps): ReactElement {
    const { enumerationAttribute } = props;

    const options = useMemo<Option[]>(() => {
        const universe = enumerationAttribute.universe ?? [];
        const collator = new Intl.Collator(undefined, {
            usage: "sort",
            sensitivity: "base",
            numeric: true
        });

        const mapped = universe.map(key => ({
            key,
            // The Mendix formatter resolves the translatable enumeration caption
            // in the language of the current signed-in user.
            caption: enumerationAttribute.formatter.format(key)
        }));

        mapped.sort((left, right) => {
            const leftValue = props.sortMode === "key" ? left.key : left.caption;
            const rightValue = props.sortMode === "key" ? right.key : right.caption;
            const result = collator.compare(leftValue, rightValue);
            return props.sortDirection === "descending" ? -result : result;
        });

        return mapped;
    }, [enumerationAttribute.universe, enumerationAttribute.formatter, props.sortMode, props.sortDirection]);

    const currentValue = enumerationAttribute.value ?? "";
    const disabled = enumerationAttribute.readOnly || enumerationAttribute.status !== "available";

    return (
        <div className={classNames("enumeration-sort-selector", props.class)} style={props.style}>
            <select
                id={props.name}
                className="form-control"
                value={currentValue}
                disabled={disabled}
                aria-label={props.ariaLabel || "Enumeration"}
                onChange={event => enumerationAttribute.setValue(event.target.value || undefined)}
            >
                <option value="">{props.emptyOptionCaption}</option>
                {options.map(option => (
                    <option key={option.key} value={option.key}>
                        {option.caption}
                    </option>
                ))}
            </select>
            {enumerationAttribute.validation ? (
                <div className="alert alert-danger enumeration-sort-selector__validation" role="alert">
                    {enumerationAttribute.validation}
                </div>
            ) : null}
        </div>
    );
}
