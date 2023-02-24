import useScale from "@/hooks/useScale";
import PropTypes from "prop-types";

export default function MediumText({ children }) {
    const { scale } = useScale();
    return (
        <p
            className="text-sm sm:text-base -tracking-0.25 leading-0.3 text-primary opacity-95"
            style={
                scale > 1
                    ? {
                        fontSize: `${1.125 * scale}rem`,
                        letterSpacing: `${-0.0625 * scale}rem`,
                    }
                    : null
            }
        >
            {children}
        </p>
    );
}
MediumText.propTypes = {
    children: PropTypes.node.isRequired,
  };
  