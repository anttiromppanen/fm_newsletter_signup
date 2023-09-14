/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  handlePress?: () => void;
}

function StyledButton({
  text,
  handlePress,
  className,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={handlePress}
      className={`
        from-userGradient1 to-userGradient2 
        w-full rounded-xl bg-userDarkGrey px-12 py-5 text-white 
        hover:bg-gradient-to-r hover:font-bold hover:shadow-[-2px_24px_28px_-2px_rgba(255,82,122,0.39)] ${className}
  `}
    >
      {text}
    </button>
  );
}

export default StyledButton;
