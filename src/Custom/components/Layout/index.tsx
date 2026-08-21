import { LovableLayout } from '@/components/Layout'
import React from 'react'
import { ChatWidget } from 'src/components/Chat/ChatWidget'

type LayoutCustomProps = React.PropsWithChildren

export const LayoutCustom: React.FC<LayoutCustomProps> = ({ children }) => {
  return (
    <>
      <LovableLayout>{children}</LovableLayout>
      <ChatWidget />
    </>
  )
}
