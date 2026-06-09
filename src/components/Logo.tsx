import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Digital Narcos logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
