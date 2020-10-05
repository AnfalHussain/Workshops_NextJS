import Link from "next/link";
import Workshops from "./workshops";
export default function Home() {
  return (
    <div>
      <Workshops />
      {/* <Link href="/workshops">
      <div className="btn btn-primary">Workshops</div>
    </Link> */}
    </div>
  );
}
