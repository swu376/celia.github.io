import React from 'react'

type Props = {
    children: React.ReactNode
}

const AboutLayout = ( { children }: Props) => {
  return (
    <div>
        layout2
        <div>
            {children}
        </div>
    </div>
  )
}

export default AboutLayout