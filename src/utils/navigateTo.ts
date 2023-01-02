import { useNavigate } from "react-router-dom"

export function navigateTo(path: string) {
  const navigate = useNavigate()
  navigate(path)
}
