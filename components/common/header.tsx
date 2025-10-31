import Image from "next/image";
import Logo from "@/assets/images/logo-transparent.png";
import Link from "next/link";

const NAV_LINKS = [
  { title: "Anasayfa", href: "/" },
  { title: "Hakkimizda", href: "/about-us" },
  { title: "Faaliyet Alanlarimiz", href: "/our-work" },
  { title: "Ekibimiz", href: "/our-team" },
  { title: "Davalar & Makaleler", href: "/articles-cases" },
  { title: "Iletisim", href: "/contact" },
  { title: "Diller" },
];
export default function Header() {
  return (
    <header className="fixed flex justify-between p-4 font-header z-50 w-full">
      <Link href="/">
        <Image
          className="w-[360px] h-[81px] hover:cursor-pointer"
          loading="eager"
          src={Logo}
          alt="logo"
        />
      </Link>
      <ul className="flex items-center space-x-8 text-white text-shadow-page">
        {NAV_LINKS.map(({ title, href }, index) =>
          href ? (
            <Link key={title + index} {...{ href }}>
              <li>{title}</li>
            </Link>
          ) : (
            <li className="hover:cursor-pointer" key={title + index}>
              {title}
            </li>
          )
        )}
      </ul>
    </header>
  );
}
