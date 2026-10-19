import { cn } from "../cn"
import { Text } from "../foundations/Text"

type SectionHeaderProps = {
  children: string
  className?: string
}

export function SectionHeader({ children, className }: SectionHeaderProps) {
  return (
    <Text variant="eyebrow" className={cn("uppercase text-content-secondary", className)}>
      {children}
    </Text>
  )
}
