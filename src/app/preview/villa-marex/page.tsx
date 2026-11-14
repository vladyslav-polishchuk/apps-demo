import type { Metadata } from "next";
import VillaMarex from "./villa-marex";

export const metadata: Metadata = {
	title: "Villa Marex — A slower kind of summer",
	description:
		"Your private Istrian escape. Discover Villa Marex in Pavićini: three bedrooms, a private pool, and space to slow down near the Adriatic.",
};

export default function VillaMarexPage() {
	return <VillaMarex />;
}
