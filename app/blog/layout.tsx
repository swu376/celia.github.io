import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = (props: Props) => {
  return (
    <div>this is blog page
        {props.children}
    </div>
  )
}

export default layout