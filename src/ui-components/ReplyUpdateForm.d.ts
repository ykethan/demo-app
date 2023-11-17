import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Reply } from "./graphql/types";
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
export declare type ReplyUpdateFormInputValues = {
    author?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type ReplyUpdateFormValidationValues = {
    author?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReplyUpdateFormOverridesProps = {
    ReplyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReplyUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReplyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reply?: Reply;
    onSubmit?: (fields: ReplyUpdateFormInputValues) => ReplyUpdateFormInputValues;
    onSuccess?: (fields: ReplyUpdateFormInputValues) => void;
    onError?: (fields: ReplyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReplyUpdateFormInputValues) => ReplyUpdateFormInputValues;
    onValidate?: ReplyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReplyUpdateForm(props: ReplyUpdateFormProps): React.ReactElement;
