import React from 'react'
import Info from '@/about/components/info'

type Props = {
    f1: string,
    f2: number
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