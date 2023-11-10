import Link from "next/link";
import { useState, useEffect } from "react";
import * as Auth from "@aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useRouter } from "next/router";

export default function HomePage() {
  // const router = useRouter();
  // useEffect(() => {
  //   checkUser();
  // }, []);

  // function checkUser() {
  //   Hub.listen("auth", ({ payload }) => {
  //     if (payload.event === "signedIn") {
  //       router.push("/user");
  //     }
  //   });
  // }

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <header className="flex justify-end items-center py-4">
        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Link>
      </header>

      <main>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Our Blog
        </h1>
        {/* Add images and welcome text */}
      </main>
    </div>
  );
}
