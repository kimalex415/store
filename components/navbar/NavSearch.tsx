"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

function NavSearch() {
	return (
		<Input
			type="search"
			placeholder="search product..."
			className="max-w-xs dark:bg-muted"
		/>
	);
}

export default NavSearch;
