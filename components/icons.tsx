import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4A8.4 8.4 0 1 1 20.5 11.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.1 7.6c.3-.3.7-.2.9.1l1 1.8c.2.3.1.6-.1.8l-.7.7c.6 1.4 1.7 2.5 3.1 3.1l.7-.8c.2-.2.6-.3.8-.1l1.9.9c.3.2.5.6.3.9-.3.8-1.2 1.4-2.1 1.4-3.1-.1-6.3-3.2-6.5-6.3 0-1 .2-1.8.7-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" {...props}>
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path d="M12 21s6-5.8 6-12a6 6 0 1 0-12 0c0 6.2 6 12 6 12Z" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" {...props}>
      <path d="m4 10 3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

