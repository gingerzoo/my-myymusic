import { lxRequest1 } from "@/services/index"

export function getRecommData() {
  return lxRequest1.request({
    url: "/banner"
  })
}
