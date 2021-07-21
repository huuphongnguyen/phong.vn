import NextLink from "next/link";

export default function ContactButton() {
  return (
    <div>
      <NextLink href="/phong">
        <a
          className="rainbow_contact_button font-sourcecodepro text-sm"
          alt="Contact me"
        />
      </NextLink>
    </div>
  );
}
