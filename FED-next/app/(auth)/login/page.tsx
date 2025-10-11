import { LoginForm } from "@/components/custom/Forms/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-[#0D3486] relative hidden lg:block overflow-hidden">
        {/* <img
          src="/assets/images/login-image.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover object-right full zoom"
          height={900}
          width={900}
        /> */}
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-end">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img
              src="/assets/svgs/Vector.svg"
              alt="logo"
              height={50}
              width={180}
            />{" "}
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md bg-[#0D3486] !text-white py-18 px-8 overflow-hidden rounded-xl">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
