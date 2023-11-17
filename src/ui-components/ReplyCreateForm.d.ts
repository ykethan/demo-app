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
export declare type ReplyCreateFormInputValues = {
    author?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type ReplyCreateFormValidationValues = {
    author?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReplyCreateFormOverridesProps = {
    ReplyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReplyCreateFormProps = React.PropsWithChildren<{
    overrides?: ReplyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReplyCreateFormInputValues) => ReplyCreateFormInputValues;
    onSuccess?: (fields: ReplyCreateFormInputValues) => void;
    onError?: (fields: ReplyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReplyCreateFormInputValues) => ReplyCreateFormInputValues;
    onValidate?: ReplyCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReplyCreateForm(props: ReplyCreateFormProps): React.ReactElement;
