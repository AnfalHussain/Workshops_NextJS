import Link from "next/link";

export default function Home() {
  return (
    <Link href="/workshops">
      <div className="btn btn-primary">Workshops</div>
    </Link>
  );
}
