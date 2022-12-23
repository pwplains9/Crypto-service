export function make_component_col(component, props, meta = {}, styles = {}) {
  return make_col(null, { component: { component, props }, meta, styles })
}

/**
 * @param {string} value
 */
export function make_col(value, { component, meta, styles } = {}) {
  return {
    value,
    component,
    meta,
    styles,
  }
}

export function make_row(cols = [], { metadata } = {}) {
  return {
    cols,
    metadata,
  }
}

/**
 * @param {string[]} titles
 */
export function make_table(titles, content) {
  return {
    titles,
    content,
  }
}
