/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.reload();
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button onClick={signOut} className="btn-logo">
              FEED
            </button>
          </Link>
        </li>
        {/* user is signed in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}
        {/* user is not signed in OR has not created username */}
        {!username && (
          <Link href="/enter">
            <button className="btn-blue">Log In</button>
          </Link>
        )}
      </ul>
    </nav>
  );
}
