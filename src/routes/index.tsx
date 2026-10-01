import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rusty Nail Renovations | Genesee County Remodeling" },
      { name: "description", content: "Premium kitchen, bathroom, home, deck, tile, door and window remodeling in Genesee County, Michigan. Request a free estimate." },
      { property: "og:title", content: "Rusty Nail Renovations | Crafted Spaces, Beautifully Built" },
      { property: "og:description", content: "Professional residential remodeling and custom craftsmanship for homeowners throughout Genesee County, Michigan." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
