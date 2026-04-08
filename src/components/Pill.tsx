import { type ReactNode } from 'react'

export function Pill({ children, subtle }: { children: ReactNode; subtle?: boolean }) {
  return <span className={subtle ? 'pill pillSubtle' : 'pill'}>{children}</span>
}

