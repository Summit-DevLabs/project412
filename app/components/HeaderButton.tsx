import { Link } from "@remix-run/react";

export default function HeaderButton({
  link,
  title,
  setIsOpen
}: {
  link: string,
  title: string,
  setIsOpen: (value: boolean) => void
}) {
  return (
    <>
      <Link to={link}>
        <button
          onClick={() => setIsOpen(false)}
          className="w-full block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-black transition hover:bg-secondary hover:text-white focus:outline-none focus:ring"
          type="button"
        >
          {title}
        </button>
      </Link>
    </>
  )
}