import Link from "next/link";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
          <div className={""}>
              <Link href={"/track/1"}>1</Link><br/>
              <Link href={"/track/2"}>2</Link><br/>
              <Link href={"/track/3"}>3</Link><br/>
              <Link href={"/track/4"}>4</Link><br/>
              <Link href={"/track/5"}>5</Link><br/>
              <Link href={"/track/6"}>6</Link><br/>
          </div>

          <div>{children}</div>
    </div>
  )
}
