"use client";
import { signupSchema, SignupTypes } from "@/Types/SignupTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupTypes>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignupTypes) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6 rounded-lg bg-gray-800 p-6 shadow-lg"
      >
        <h1 className="text-5xl font-bold text-center">DevTools</h1>
        <h1 className="text-2xl font-bold text-center">Create Account</h1>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Enter your name"
            className="mt-1 w-full rounded-md border border-gray-700 bg-gray-900 p-2 focus:border-green-500 focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="mt-1 w-full rounded-md border border-gray-700 bg-gray-900 p-2 focus:border-green-500 focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className="mt-1 w-full rounded-md border border-gray-700 bg-gray-900 p-2 focus:border-green-500 focus:outline-none"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
