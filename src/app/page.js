"use client";
import { useAdminGetSession, useAdminLogin } from "medusa-react";
export default function Home() {
  const { data, isLoading } = useAdminGetSession();
  const adminLogin = useAdminLogin();

  const handleLogin = () => {
    adminLogin.mutate(
      {
        email: "dmbi@gmail.com",
        password: "12345",
      },
      {
        onSuccess: ({ user }) => {
          console.log(user);
        },
      },
    );
  };
  return (
    <div>
      <button
        onClick={() => {
          handleLogin();
        }}
      >
        Click
      </button>
    </div>
  );
}
