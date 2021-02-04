import { ReactNode, useCallback, useState } from "react";

interface IFormFieldRawProps {
  children: ReactNode;
  interceptor?: { (value: any): any }[];
}

const FormFieldRaw = ({ children, interceptor }: IFormFieldRawProps) => {
  const [field, setField] = useState();
  const handleChange = (e, callBack) => {
    let value = e.target.value;
    interceptor?.forEach((intercept) => {
      value = intercept(value);
    });
    setField(value);
    if (callBack) {
      callBack(e);
    }
  };
  const renderChild = useCallback(() => {}, []);
};
