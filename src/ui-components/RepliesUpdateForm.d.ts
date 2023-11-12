import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Replies } from "../../graphql/types";
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
export declare type RepliesUpdateFormInputValues = {
    author?: string;
    content?: string;
};
export declare type RepliesUpdateFormValidationValues = {
    author?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RepliesUpdateFormOverridesProps = {
    RepliesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RepliesUpdateFormProps = React.PropsWithChildren<{
    overrides?: RepliesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    replies?: Replies;
    onSubmit?: (fields: RepliesUpdateFormInputValues) => RepliesUpdateFormInputValues;
    onSuccess?: (fields: RepliesUpdateFormInputValues) => void;
    onError?: (fields: RepliesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RepliesUpdateFormInputValues) => RepliesUpdateFormInputValues;
    onValidate?: RepliesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RepliesUpdateForm(props: RepliesUpdateFormProps): React.ReactElement;
