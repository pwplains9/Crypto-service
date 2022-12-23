import { BREAKPOINT_LG } from '~/utils/constants'

const REGEX_USER_AGENTS = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
]

export function useAdaptivity(breakpoint = BREAKPOINT_LG) {
  const user_agent_mobile = REGEX_USER_AGENTS.some((rgx) =>
    navigator.userAgent.match(rgx)
  )
  return window.innerWidth <= breakpoint || user_agent_mobile
}
