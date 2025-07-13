import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import EditProfileForm from "./EditProfileForm";

import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/dbConnent";



export default async function CollegeProfilePage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const profileCollection = await dbConnect("profiles");
  const rawProfile = await profileCollection.findOne({ userId: user.id });

  const profile = rawProfile
    ? {
        name: rawProfile.name || "",
        university: rawProfile.university || "",
        address: rawProfile.address || "",
        phone: rawProfile.phone || "",
        dob: rawProfile.dob || "",
      }
    : null;

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="border-b space-y-0.5 gap-0.5">
          <CardTitle className="text-xl">College Profile</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            You can view and edit your college information here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditProfileForm
            profile={profile}
            userId={user.id}
            email={user.emailAddresses[0]?.emailAddress || ""}
          />
        </CardContent>
      </Card>
    </div>
  );
}