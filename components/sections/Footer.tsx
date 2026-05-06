import Image from "next/image";
import { bodyText, Container, sectionGap } from "./shared";
import FooterSubscribeForm from "../FooterSubscribeForm";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-white py-14">
      <Container>
        <div className={`grid ${sectionGap} md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]`}>
          <div>
            <Image src="/logo.avif" alt="Delipat logo" width={190} height={43} className="h-auto w-[175px]" />
            <p className={`mt-5 max-w-sm ${bodyText}`}>DeliPat helps PI firms convert more of the leads they’re already paying for.</p>
          </div>
          <FooterSubscribeForm />
          <div>
            <p className="font-heading text-lg font-semibold tracking-[-0.02em]">Contact</p>
            <div className="mt-4 space-y-3 text-[#4A5568]">
              <a href="mailto:connect@delipat.com" className="hover:text-[#0A1628] block">connect@delipat.com</a>
              <a href="https://www.linkedin.com/company/delipatit/posts/?feedView=all" target="_blank" className="hover:text-[#0A1628] block">Linkedin</a>
              <a href="https://www.linkedin.com/in/growbusinesswithrajesh/" target="_blank" className="hover:text-[#0A1628] block">Founder Linkedin</a>
              <a href="https://calendly.com/rajesh-chatterjee/30min" target="_blank" className="hover:text-[#0A1628] block">Book Audit</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-black/[0.08] pt-7 text-sm text-[#4A5568] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Delipat. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://delipat.com/privacy-policy" className="hover:text-[#0A1628]">Privacy Policy</a>
            <a href="https://delipat.com/terms-and-Conditions" className="hover:text-[#0A1628]">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="font-heading text-lg font-semibold tracking-[-0.02em]">{title}</p>
      <div className="mt-4 space-y-3 text-[#4A5568]">
        {links.map((link) => <a key={link} href="#top" className="block transition hover:text-[#0A1628]">{link}</a>)}
      </div>
    </div>
  );
}
