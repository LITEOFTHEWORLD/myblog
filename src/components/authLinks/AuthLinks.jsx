import React from "react";
import Link from "next/link";
const AuthLinks = () => {
  // temporary
  const status = "notaunthenticated";
  return (
    <>
      {status === "notaunthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
