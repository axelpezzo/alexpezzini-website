import { twMerge } from "tailwind-merge";
import { getContainerPadding, getContainerSize } from "./helper";
import { IContainer_Props } from "./types";

export const Container = ({
  children,
  size = "lg",
  className,
}: IContainer_Props) => {
  return (
    <div
      className={twMerge(
        `mx-auto relative ${getContainerSize(size)} ${getContainerPadding(
          size
        )}`,
        className
      )}
    >
      {children}
    </div>
  );
};
