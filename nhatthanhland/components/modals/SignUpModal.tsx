"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import {
  validateForm,
  type FormData,
  type ValidationErrors,
} from "../../utils/validation";

export default function SignUpModal({
  open,
  setOpen,
  onSwitchToSignIn,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  onSwitchToSignIn: () => void;
}) {
  const [showOTP, setShowOTP] = useState(false);
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);

  const [formData, setFormData] = useState<FormData>({
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setShowOTP(true);
  };

  const handleSwitchToSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false); // Close signup modal
    onSwitchToSignIn(); // Open signin modal
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                  width={21}
                  height={21}
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  {showOTP ? "Enter OTP Code" : "Register with us"}
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSendOTP} className="space-y-6">
                  {!showOTP ? (
                    <>
                      <div>
                        <label
                          htmlFor="phonenumber"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          Phone number
                        </label>
                        <div className="mt-2">
                          <input
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            id="phonenumber"
                            name="phoneNumber"
                            type="tel"
                            required
                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${
                              errors.phoneNumber ? "border-red-500" : ""
                            }`}
                          />
                          {errors.phoneNumber && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.phoneNumber}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          Password
                        </label>
                        <div className="mt-2">
                          <input
                            value={formData.password}
                            onChange={handleInputChange}
                            id="password"
                            name="password"
                            type="password"
                            required
                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${
                              errors.password ? "border-red-500" : ""
                            }`}
                          />
                          {errors.password && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.password}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="confirm-password"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          Confirm password
                        </label>
                        <div className="mt-2">
                          <input
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            id="confirm-password"
                            name="confirmPassword"
                            type="password"
                            required
                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${
                              errors.confirmPassword ? "border-red-500" : ""
                            }`}
                          />
                          {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.confirmPassword}
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Send OTP
                      </button>
                      <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already a member?{" "}
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                          onClick={handleSwitchToSignIn}
                        >
                          Sign in now
                        </a>
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center gap-2">
                        {[...Array(6)].map((_, index) => (
                          <input
                            key={index}
                            type="text"
                            maxLength={1}
                            ref={(el) => {
                              otpInputs.current[index] = el;
                            }}
                            className="w-12 h-12 text-center border rounded-md text-lg focus:border-indigo-600 focus:outline-none text-gray-900"
                            onChange={(e) =>
                              handleOTPChange(index, e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (
                                e.key === "Backspace" &&
                                !e.currentTarget.value
                              ) {
                                e.preventDefault();
                                otpInputs.current[index - 1]?.focus();
                              }
                            }}
                          />
                        ))}
                      </div>

                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white"
                      >
                        Verify OTP
                      </button>
                      <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Didn&apos;t received code?{" "}
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Resend
                        </a>
                      </p>
                    </>
                  )}
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
