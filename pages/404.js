import Link from "next/Link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    setTimeout(() => {
      //minus means reverse page
      // router.go(-1)
      //positive means forward page
      router.push("/");
    }, 3000);
    console.log("use effect run");
  }, []);

  return (
    <div className="not-found">
      <h1>Oooppsss....</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the <Link href="/">HomePage</Link>
      </p>
    </div>
  );
}
