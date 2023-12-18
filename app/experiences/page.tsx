import React from 'react'
import Info from '@/experiences/components/info'

type Props = {
}

const about = (props: Props) => {
  return (
    <div>
      this is about page
      <Info>
        this is children for info
      </Info>
    </div>
  )
}

export default about