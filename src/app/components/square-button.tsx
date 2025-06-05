import React from "react";

export default function SquareButton(props: any) {
  const { children, title, className, onClick } = props;
  return (
    <button
      className={
        "flex flex-col justify-center items-center aspect-square h-full hover:cursor-pointer " +
        className
      } onClick={onClick}>
      {children}
      {title && <span className="text-xs pt-1">{title}</span>}
    </button>
  );
}
