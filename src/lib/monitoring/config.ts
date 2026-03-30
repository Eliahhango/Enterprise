export function isClientMonitoringEnabled() {
  return (process.env.NEXT_PUBLIC_ENABLE_CLIENT_MONITORING ?? "false") === "true";
}
