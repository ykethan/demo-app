import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RepliesCreateFormInputValues = {
    author?: string;
    content?: string;
};
export declare type RepliesCreateFormValidationValues = {
    author?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RepliesCreateFormOverridesProps = {
    RepliesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RepliesCreateFormProps = React.PropsWithChildren<{
    overrides?: RepliesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RepliesCreateFormInputValues) => RepliesCreateFormInputValues;
    onSuccess?: (fields: RepliesCreateFormInputValues) => void;
    onError?: (fields: RepliesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RepliesCreateFormInputValues) => RepliesCreateFormInputValues;
    onValidate?: RepliesCreateFormValidationValues;
} & React.CSSProperties>;
export default function RepliesCreateForm(props: RepliesCreateFormProps): React.ReactElement;
