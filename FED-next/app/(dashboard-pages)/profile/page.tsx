import { MemberProfile } from "@/components/custom/profile/member-profile";

export default function ProfilePage() {
  return (
    <div className="flex items-center justify-center mt-4">
      <MemberProfile
        name="Vinay"
        role="Member in SSKVCT"
        email="vinay@example.com"
        bio="I am the member of the sskvct charity society mata"
        avatarUrl="https://github.com/shadcn.png"
        status="active"
      />
    </div>
  );
}
