import { View } from "react-native"
import { primitives } from "@arete/tokens"
import { Icon } from "../foundations/Icon"
import { Pressable } from "../foundations/Pressable"

type CheckboxProps = {
  checked: boolean
  onChange?: (next: boolean) => void
  disabled?: boolean
  accessibilityLabel?: string
}

function Checkbox({ checked, onChange, disabled = false, accessibilityLabel }: CheckboxProps) {
  return (
    <Pressable
      onPress={() => onChange?.(!checked)}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      accessibilityLabel={accessibilityLabel}
      className="h-11 w-11 items-center justify-center rounded-full disabled:opacity-100"
    >
      <View
        className={
          checked
            ? "h-[28px] w-[28px] items-center justify-center rounded-full bg-primary"
            : disabled
              ? "h-[28px] w-[28px] rounded-full border-[1.5px] border-content-disabled"
              : "h-[28px] w-[28px] rounded-full border-[1.5px] border-line"
        }
      >
        {checked ? <Icon name="check" size={16} color={primitives.ivory} /> : null}
      </View>
    </Pressable>
  )
}

export default Checkbox
