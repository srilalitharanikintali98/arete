import { useAuth } from "../../auth/AuthContext"
import { Screen } from "../../ui/foundations/Screen"
import { Button } from "../../ui/foundations/Button"

export default function LoginScreen() {
  const { signIn } = useAuth()

  const handleLogin = () => {
    signIn()
  }

  return (
    <Screen>
      <Button label="Login" onPress={handleLogin} />
    </Screen>
  )
}
