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
        className="rounded-md  border-2 border-gray-200 p-2 px-3 hover:border-primary active:bg-primary/90 "
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
        className="rounded-md border-t bg-primary p-2 px-3 text-white shadow hover:bg-primary/70 active:bg-primary/90"
      >
        {props.children}
      </button>
    </>
  );
};
