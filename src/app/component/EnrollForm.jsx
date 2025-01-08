"use client";
import { useState } from "react";
import { enrollscholarship } from "../models/enroll";
import { toast } from "react-toastify";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const statesInNigeria = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Federal Capital Territory",
];

export default function EnrollForm({ setOpen }) {
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [comment, setComment] = useState("");
  const [state, setState] = useState("");
  const [following, setFollowing] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Step 2: Set isSubmitting to true when submission starts
    try {
      // Call the addPost function and await its result
      const response = await enrollscholarship(
        comment,
        email,
        phoneNumber,
        category,
        state,
        fullName,
        course,
        following
      );
      if (response.success) {
        // Reset form fields after successful submission
        setCategory("");
        setCourse("");
        setFollowing("");
        setComment("");
        setEmail("");
        setPhoneNumber("");
        setFullName("");
        setState("");
        // Display success message
        toast.success(
          "Request submitted successfully, kindly check your mail inbox regularly for our reply. Best of Luck!"
        );
        // Close modal or perform other success actions
        setOpen(false);
      } else {
        // Display error message if submission failed
        toast.error(response.message); // Show toast for error
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Submission error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[80%] mx-auto md:w-[40rem] md:mx-auto md:p-6  rounded-lg"
      >
        <h1 className="text-center mb-6 p-2 bg-[#027839] text-white font-semibold rounded-md">
          Kindly Fill in the Information Below
        </h1>
        <div className="flex items-center justify-center mb-6">
          <PriorityHighIcon sx={{ color: "red" }} />
          <span className="text-sm text-red-500">
            Allocation for fully funded scholarships is currently at capacity.
          </span>
        </div>
        <div className="flex flex-col gap-4">
          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="full funded" disabled>
              Full Funded Scholarship
            </option>
            <option value="half fundde">Partly Funded Scholarship</option>
          </select>

          {/* Type Dropdown */}
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          >
            <option value="" disabled>
              Select Course of choice
            </option>
            <option value="Cybersecurity" disabled>Cybersecurity</option>
            <option value="Software development" disabled>Software Development</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="soc">Security Operation Analyst</option>
            <option value="cloud-azure">Cloud computing with azure</option>
            <option value="cloud-aws" disabled>
              Cloud computing with aws
            </option>
            <option value="devops" disabled>
              Devops
            </option>
            <option value="cloud-azure-intermediate" disabled>
              Cloud computing with azure (Intermediate level)
            </option>
          </select>

          {/* Following Dropdown */}
          <select
            value={following}
            onChange={(e) => setFollowing(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          >
            <option value="" disabled>
              Are you following us on all social media platforms?
            </option>
            <option value="yes">yes</option>
            <option value="no">No</option>
          </select>

          {/* Name Field with Tooltip */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
            />
          </div>

          {/* Phone Number Field with Tooltip */}
          <div className="relative">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
            />
          </div>

          {/* State Dropdown */}
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
          >
            <option value="" disabled>
              State
            </option>
            {statesInNigeria.map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>

          {/* Email Field with Tooltip */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#33af67]"
            />
          </div>

          {/* Comment Textarea */}
          <textarea
            placeholder="Kindly tell us why you need this scholarship"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:border-[#33af67]"
          />

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-[#027839] text-white p-3 rounded-md hover:bg-[#2a9c5a] transition-colors duration-300"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}
