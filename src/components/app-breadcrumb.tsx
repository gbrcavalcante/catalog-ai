import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";
import { useBreadcrumb } from "@/hooks/use-breadcrumb";
import { breadcrumbLabels } from "@/config/app-breadcrumb.config";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function AppBreadcrumb() {
  const { buildPath, isLast, pathSegments } = useBreadcrumb();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const path = buildPath(index);

          return (
            <Fragment key={path}>
              <BreadcrumbItem>
                {isLast(index) ? (
                  <BreadcrumbPage>
                    {breadcrumbLabels[segment] || segment}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={path}>
                      {breadcrumbLabels[segment] || segment}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast(index) && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
