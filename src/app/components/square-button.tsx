import React from "react";

export default function SquareButton(props: any) {
  const { children, title, className } = props;
  return (
    <button
      className={
        "flex flex-col justify-center items-center aspect-square h-full hover:cursor-pointer " +
        className
      }>
      {children}
      {title && <span className="text-xs pt-1">{title}</span>}
    </button>
  );
}
