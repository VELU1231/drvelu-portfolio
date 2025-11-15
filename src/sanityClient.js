import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ja5nroqr",   // ← auto-created for you
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
