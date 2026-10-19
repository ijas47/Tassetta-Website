import { redirect } from "next/navigation";
import { appUrl } from "@/lib/app";

export default function Page() {
  redirect(appUrl);
}
