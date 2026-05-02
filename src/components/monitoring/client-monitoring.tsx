"use client";

import { useEffect } from "react";

import { isClientMonitoringEnabled } from "@/lib/monitoring/config";

export function ClientMonitoring() {
  useEffect(() => {
    if (!isClientMonitoringEnabled()) {
      return;
    }

    function send(payload: Record<string, unknown>) {
      const body = JSON.stringify(payload);

      if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
        const blob = new Blob([body], { type: "application/json" });
        navigator.sendBeacon("/api/monitoring", blob);
        return;
      }

      void fetch("/api/monitoring", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
        keepalive: true,
      });
    }

    function handleError(event: ErrorEvent) {
      send({
        type: "client-error",
        message: event.message,
        source: event.filename,
        line: event.lineno,
        column: event.colno,
        path: window.location.pathname,
      });
    }

    function handleRejection(event: PromiseRejectionEvent) {
      send({
        type: "unhandled-rejection",
        reason: String(event.reason),
        path: window.location.pathname,
      });
    }

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}
