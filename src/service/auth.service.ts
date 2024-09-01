import { LoginRequest } from "@/types";

export const login = async (
  request: LoginRequest
): Promise<{ token: string }> => {
  const res = await fetch(`http://localhost:3000/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    throw new Error("error");
  }

  const token: string = await res.json();

  return {
    token,
  };
};
