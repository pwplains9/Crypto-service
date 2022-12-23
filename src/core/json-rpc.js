export function decode_value(data) {
  // "{error: 'No data'}"
  const decoded_base64 = atob(
    data?.result?.response?.value ?? 'IntlcnJvcjogJ05vIGRhdGEnfSI='
  )
  const decoded_json = JSON.parse(decoded_base64)
  return {
    decoded: decoded_json,
    status: decoded_base64 !== '{"error": "No data"}',
  }
}
