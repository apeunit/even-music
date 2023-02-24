import useScale from "@/hooks/useScale";

export default function SmallText({ children, secondary }) {
    const { scale } = useScale();
    return (
        <span
            className={`block font-normal sm:text-sm text-xs -tracking-0.1 leading-0.3 text-opacity-95 ${secondary ? "text-secondary" : "text-primary"
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
        </span>
    );
}

