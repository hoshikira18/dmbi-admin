"use client";
import { useAdminGetSession } from "medusa-react";
export default function Home() {
  const { data, isLoading } = useAdminGetSession();

  return (
    <div>
      <button
        onClick={() => {
          if (!isLoading) {
            console.log(data);
          }
        }}
      >
        Click
      </button>
    </div>
  );
}
