"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { ProductTab } from "./product-types";

let revision = 0;
const listeners = new Set<() => void>();

function emit() {
  revision += 1;
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onUrl = () => emit();
  window.addEventListener("hashchange", onUrl);
  window.addEventListener("popstate", onUrl);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("hashchange", onUrl);
    window.removeEventListener("popstate", onUrl);
  };
}

function parseTab(): ProductTab {
  const raw = window.location.hash.slice(1);
  if (
    raw === "cellular" ||
    raw === "restore" ||
    raw === "sleep" ||
    raw === "system"
  ) {
    return raw;
  }
  return "cellular";
}

function getSnapshot(): string {
  return `${revision}:${parseTab()}`;
}

function getServerSnapshot(): string {
  return "0:cellular";
}

export function useProductTab() {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const activeTab = snap.split(":")[1] as ProductTab;

  const selectTab = useCallback((id: ProductTab) => {
    window.history.replaceState(null, "", `#${id}`);
    emit();
  }, []);

  return { activeTab, selectTab };
}
