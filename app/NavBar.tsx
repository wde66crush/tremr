import Link from "next/link";
import { WiEarthquake } from "react-icons/wi";

const NavBar = () => {
  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard'
    },
    {
      label: 'Tremrs',
      href: '/tremrs'
    },
    {
      label: 'Create',
      href: '/new-tremr'
    },
  ]
  return (
    <nav className="flex border-b mb-6 px-6 h-12 items-center">
      <Link className="flex mr-4 items-center" href="/">
        <WiEarthquake className="inline-block" size={60} />
        <p className="text-orange-700">Tremrs</p>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}
              className="text-gray-800 hover:text-gray-400">{link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar