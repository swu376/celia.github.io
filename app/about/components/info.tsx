import React from 'react'

type Props = {
    children: React.ReactNode
}

const Info = (props: Props) => {
  return (
    <div>
        info
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default Info