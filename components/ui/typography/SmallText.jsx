import useScale from "@/hooks/useScale";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function SmallText({ children, secondary }) {
  const { scale } = useScale();
  const smallTextClass = classNames(
    "block font-normal sm:text-sm text-xs -tracking-0.1 leading-0.3 text-opacity-95",
    {
      "text-secondary": secondary,
      "text-primary": !secondary,
    }
  );
  const smallTextStyle =
    scale > 1
      ? {
          fontSize: `${0.875 * scale}rem`,
          letterSpacing: `${-0.025 * scale}rem`,
        }
      : null;

  return (
    <span className={smallTextClass} style={smallTextStyle}>
      {children}
    </span>
  );
}

SmallText.propTypes = {
  secondary: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
