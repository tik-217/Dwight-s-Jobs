import { ILoginFormKeys, LoginFormData } from "@/feature/LoginForm/model/types";
import { ChangeHandler, UseFormRegister } from "react-hook-form";

export interface MainInputProps {
  name: ILoginFormKeys;
  placeholder: string;
  errors?: string | undefined;
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
  required?: boolean | undefined;
}

export type IMainInputRef = MainInputProps &
  ReturnType<UseFormRegister<LoginFormData>>;
