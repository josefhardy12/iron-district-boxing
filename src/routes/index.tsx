import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/iron-district/index.html");
  }, []);
  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F5", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
      Loading Iron District…
    </div>
  );
}
