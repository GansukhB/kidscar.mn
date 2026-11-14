import type { SVGProps } from "react";

// Kids-Car-Mongolia.html-ийн <symbol>-уудыг React компонент болгосон.
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, className = "h-6 w-6", ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.65}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3 8 3v6c0 5-8 9-8 9S4 17 4 12V6z" />
    <path d="m8 12 3 3 5-6" />
  </Base>
);

export const PersonIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="10" cy="7" r="4" />
    <path d="M3 21v-3a7 7 0 0 1 12-5m0 5 2 2 5-6" />
  </Base>
);

export const PinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
);

export const CarIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m4 9 2-6h12l2 6M3 9h18v10H3zm2 10v3m14-3v3M6 14h2m8 0h2" />
  </Base>
);

export const SchoolIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 22V9l8-6 8 6v13ZM9 22v-7h6v7M12 3V1h6M7 11h1m8 0h1" />
  </Base>
);

export const ArrowIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
    <path d="M2 10 10 2M4 2h6v6" />
  </svg>
);
