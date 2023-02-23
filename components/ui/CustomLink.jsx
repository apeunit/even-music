import Link from "next/link";
import useScale from "@/hooks/useScale";
import PropTypes from "prop-types";

export default function CustomLink({ children, url, secondary = false }) {
  const { scale } = useScale();
  return (
    <Link
      href={url}
      target="_blank"
      className={`inline-block font-normal -tracking-0.1 leading-0.3 w-fit text-primary underline whitespace-nowrap underline-offset-0.625 hover:text-secondary text-opacity-95 ${secondary ? "text-sm" : "sm:text-sm text-xs"
        }`}
      style={
        scale > 1
          ? {
            fontSize: `${0.875 * scale}rem`,
            letterSpacing: `${-0.025 * scale}rem`,
          }
          : null
      }
    >
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  secondary: PropTypes.bool,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
