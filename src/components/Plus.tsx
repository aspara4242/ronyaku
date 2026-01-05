// components/Plus.tsx
interface Props {
  className?: string;
  isOpen?: boolean;
}

const Plus = ({ className, isOpen }: Props) => {
  return (
    <svg
      viewBox="4 4 8 8"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        transition: "transform 0.3s linear",
        transformOrigin: "center",
      }}
    >
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
    </svg>
  );
};

export default Plus;