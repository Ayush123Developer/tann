import { useRouter } from "next/router";
function pageno() {
  const router = useRouter();

  const pagenumber = router.query.pageno;

  return (
    <>
      <h1>Hello {pagenumber} World </h1>
    </>
  );
}

export default pageno;
