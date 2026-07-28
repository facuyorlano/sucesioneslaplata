import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
      <WhatsAppIcon />
      <span>Consultar</span>
    </a>
  );
}

