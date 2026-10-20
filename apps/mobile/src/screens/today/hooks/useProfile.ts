import { FAIL, PROFILE } from "../../../sample/today"
import { useSampleData } from "./useSampleData"

export function useProfile() {
  // TODO: Update to API Call
  const { data, status, retry } = useSampleData(PROFILE, FAIL.profile)
  return { name: PROFILE.name, identity: data?.identity ?? null, status, retry }
}
