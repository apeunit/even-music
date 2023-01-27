import Link from "next/link";

export default function Anchor({ children, url }) {
    return (
        <Link
            href={url}
            target="_blank"
            className="inline-block font-medium sm:text-sm text-xs -tracking-tight sm:leading-4.25 leading-4.24 text-black underline underline-offset-3 hover:text-secondary"
        >
            {children}
        </Link>
    );
}