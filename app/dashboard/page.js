"use client";
import {
  useSession,
  useUser,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { redirect } from "next/navigation";
import DashboardPage from "./dashboard";

export default function Dashboard({ children }) {
  const { isSignedIn, isLoading, user } = useUser();

  if (!isSignedIn) {
    redirect("/");
  }

  return <DashboardPage />;
}
