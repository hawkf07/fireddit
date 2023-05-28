import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

type Button = {
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const TersierButton: FC<Button> = (props) => {
  return (
    <>
      <button
        {...props}
        className="flex items-center gap-2 rounded-md  border-2 border-gray-200 p-2 px-3 hover:border-primary active:bg-primary/90 "
      >
        {props.children}
      </button>
    </>
  );
};

export const PrimaryButton: FC<Button> = (props) => {
  return (
    <>
      <button
        {...props}
        className="flex w-full items-center gap-2 rounded-md border-t bg-primary p-2 px-3 text-gray-100 shadow-md hover:bg-primary/70 active:bg-primary/90"
      >
        {props.children}
      </button>
    </>
  );
};
