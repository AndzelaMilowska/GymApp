import React from 'react'

export default function Container(props: any) {
const {className, children} = props
  return (
    <div className={"bg-primary p-3  rounded-2xl " + className}>
        {children}
    </div>
  )
}
