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
export declare type CommentCreateFormInputValues = {
    author?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type CommentCreateFormValidationValues = {
    author?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentCreateFormOverridesProps = {
    CommentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommentCreateFormProps = React.PropsWithChildren<{
    overrides?: CommentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommentCreateFormInputValues) => CommentCreateFormInputValues;
    onSuccess?: (fields: CommentCreateFormInputValues) => void;
    onError?: (fields: CommentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentCreateFormInputValues) => CommentCreateFormInputValues;
    onValidate?: CommentCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommentCreateForm(props: CommentCreateFormProps): React.ReactElement;
