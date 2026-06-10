import { useLocation } from "react-router";

export function useBreadcrumb() {
  const { pathname } = useLocation();

  const pathSegments =
    pathname === "/" ? ["/"] : pathname.split("/").filter(Boolean);

  const buildPath = (index: number) =>
    `/${pathSegments.slice(0, index + 1).join("/")}`;

  const isLast = (index: number) => index === pathSegments.length - 1;

  return { pathSegments, buildPath, isLast };
}
