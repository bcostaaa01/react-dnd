import React from 'react'

export const Heading = ({ title }) => {
  return (
    <>
      <h1 className="text-3xl font-bold pb-3 absolute inset-x-0 top-0">
          {title}
      </h1>
    </>
  )
}
