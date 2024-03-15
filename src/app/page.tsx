import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default async function Home() {
  redirect("/home");
}
