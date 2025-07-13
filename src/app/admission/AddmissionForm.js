"use client";

import React, { useState } from "react";
import { X, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

import { addAdmission } from "../actions/addAddmission";
import { toast } from "sonner";

export default function AdmissionForm({ college, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsPending(true);
  const formData = new FormData(e.currentTarget);

  try {
    await addAdmission(formData); // Call the server action directly
    toast.success("Admission submitted successfully!");
    setIsOpen(false);
  } catch (err) {
    toast.error(err.message || "Something went wrong");
  } finally {
    setIsPending(false);
  }
};

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mx-auto block w-3/5 bg-[#0f82fc] hover:opacity-80 hover:scale-105 duration-300 text-white font-medium py-2 rounded-md"
      >
        Get Admission
      </button>

      {/* BACKDROP */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          {/* DIALOG CONTENT */}
          <div className="bg-white w-[95%] sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-lg border p-6 relative animate-fade-in">
            {/* CLOSE BUTTON */}
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Close</span>
            </button>

            {/* HEADER */}
            <h2 className="text-lg font-semibold mb-4">
              Admission Form for <span className="font-bold">{college.name}</span>
            </h2>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="collegeId" value={college.id} />
              <input type="hidden" name="collegeName" value={college.name} />
              <input type="hidden" name="collegeImage" value={college.image} />

              {/* Candidate Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Candidate Name
                </label>
                <input
                  id="name"
                  name="name"
                  defaultValue={user.fullName ?? ""}
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              {/* Image */}
              <div>
                <label className="block text-sm font-medium">Image</label>
                <div className="flex items-center gap-3">
                  <img
                    src={user.imageUrl ?? ""}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <input type="hidden" name="image" value={user.imageUrl ?? ""} readOnly />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email (readonly)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={user.emailAddresses[0]?.emailAddress ?? ""}
                  readOnly
                  className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              {/* DOB */}
              <div>
                <label htmlFor="dob" className="block text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>

              {/* Alert */}
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-md p-4 flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-bold">Profile Info</p>
                  <p className="text-sm">
                    Submitted info will also be used for your{" "}
                    <span className="font-semibold">profile</span>. Make sure it’s accurate.
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#0f82fc] text-white py-2 rounded-md hover:opacity-90 transition"
                >
                  {isPending ? "Submitting..." : "Submit Admission"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}