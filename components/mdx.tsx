import { cn } from "cn";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import type * as React from "react";
import { Button } from "@/components/ui/button";

export const components: MDXComponents = {
	h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
		<h1 className={cn("mt-2 text-3xl", className)} {...props} />
	),
	h2: ({ className, ...props }: React.ComponentProps<"h2">) => {
		return (
			<h2
				id={props.children
					?.toString()
					.replace(/ /g, "-")
					.replace(/'/g, "")
					.replace(/\?/g, "")
					.toLowerCase()}
				className={cn("border-b-2 text-xl", className)}
				{...props}
			/>
		);
	},
	h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
		<h3 className={cn("text-lg", className)} {...props} />
	),
	h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
		<h4 className={cn("text-base", className)} {...props} />
	),
	h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
		<h5 className={cn("text-base", className)} {...props} />
	),
	h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
		<h6 className={cn("text-base", className)} {...props} />
	),
	a: ({ className, ...props }: React.ComponentProps<"a">) => (
		<Link
			{...props}
			href={props.href ?? ""}
			className={cn(
				"font-medium text-primary underline decoration-border underline-offset-4 hover:text-secondary",
				className,
			)}
		/>
	),
	p: ({ className, ...props }: React.ComponentProps<"p">) => (
		<p className={cn("", className)} {...props} />
	),
	strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<strong className={cn("font-medium", className)} {...props} />
	),
	ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
		<ul className={cn("ml-4 list-disc", className)} {...props} />
	),
	ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
		<ol className={cn("ml-4 list-decimal", className)} {...props} />
	),
	li: ({ className, ...props }: React.ComponentProps<"li">) => (
		<li
			className={cn("has-[input]:-ml-3 has-[input]:list-none", className)}
			{...props}
		/>
	),
	blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
		<blockquote
			className={cn("border-l-4 pl-4 italic", className)}
			{...props}
		/>
	),
	img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
		<img className={cn("rounded-md", className)} alt={alt} {...props} />
	),
	hr: ({ ...props }: React.ComponentProps<"hr">) => (
		<hr className="my-4" {...props} />
	),
	table: ({ className, ...props }: React.ComponentProps<"table">) => (
		<div className="no-scrollbar my-6 w-full overflow-y-auto rounded-lg border">
			<table
				className={cn(
					"relative w-full overflow-hidden border-none text-sm [&_tbody_tr:last-child]:border-b-0",
					className,
				)}
				{...props}
			/>
		</div>
	),
	tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
		<tr className={cn("m-0 border-border border-b", className)} {...props} />
	),
	th: ({ className, ...props }: React.ComponentProps<"th">) => (
		<th
			className={cn(
				"px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }: React.ComponentProps<"td">) => (
		<td
			className={cn(
				"whitespace-nowrap px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	pre: ({ className, children, ...props }: React.ComponentProps<"pre">) => {
		return (
			<pre
				className={cn(
					"no-scrollbar min-w-0 overflow-x-auto outline-none",
					className,
				)}
				{...props}
			>
				{children}
			</pre>
		);
	},
	figure: ({ className, ...props }: React.ComponentProps<"figure">) => {
		return <figure className={cn(className)} {...props} />;
	},
	figcaption: ({
		className,
		children,
		...props
	}: React.ComponentProps<"figcaption">) => {
		return (
			<figcaption
				className={cn(
					"flex items-center gap-2 text-code-foreground [&_svg]:size-4 [&_svg]:text-code-foreground [&_svg]:opacity-70",
					className,
				)}
				{...props}
			>
				{children}
			</figcaption>
		);
	},
	code: ({ className, ...props }: React.ComponentProps<"code">) => {
		// Inline Code.
		if (typeof props.children === "string") {
			return (
				<code
					className={cn(
						"relative break-words rounded-none bg-muted px-[0.3rem] py-[0.3rem] font-mono text-[0.8rem] outline-none",
						className,
					)}
					{...props}
				/>
			);
		}

		// Default codeblock.
		return (
			<>
				<code {...props} />
			</>
		);
	},
	Image: ({
		src,
		className,
		width,
		height,
		alt,
		...props
	}: React.ComponentProps<"img">) => (
		<Image
			className={cn("mt-6 rounded-md border", className)}
			src={(src as string) || ""}
			width={Number(width)}
			height={Number(height)}
			alt={alt || ""}
			{...props}
		/>
	),

	Button,
	Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
		<Link
			className={cn(
				"font-medium text-primary underline decoration-border underline-offset-4 hover:text-secondary",
				className,
			)}
			{...props}
		/>
	),
	LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
		<Button className={className} asChild>
			<Link {...props} />
		</Button>
	),
};
