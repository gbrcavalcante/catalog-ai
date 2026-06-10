import { cn } from "@/lib/utils";

export function TypographyH1({
  children,
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-2xl font-bold tracking-tight text-balance",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
  ...props
}: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("leading-7 not-first:mt-6", className)} {...props}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  children,
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode({
  children,
  className,
  ...props
}: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export function TypographyLead({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-base text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export function TypographySmall({
  children,
  className,
  ...props
}: React.ComponentProps<"small">) {
  return (
    <small
      className={cn("text-sm leading-none font-medium", className)}
      {...props}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}
