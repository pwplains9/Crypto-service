/**
 * @param {'light'|'dark'} theme
 */
export function setTheme(theme) {
  if (theme !== 'dark' && theme !== 'light') throw new Error('Invalid theme')
  document.documentElement.setAttribute('theme', theme)
  localStorage.setItem('theme', theme)
}

export function resetToDefaults() {
  setTheme('light')
}
