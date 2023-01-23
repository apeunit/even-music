import Link from "next/link";

export default function Anchor({ children, url }) {
    return (
        <Link
            href={url}
            target="_blank"
            className="block font-medium sm:text-sm text-xs -tracking-tight leading-3.75 sm:leading-4.25 text-black underline underline-offset-3 hover:text-secondary"
        >
            {children}
        </Link>
    );
}