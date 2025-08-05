import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://20.244.56.144/evaluation-service/logs"; // Or your backend endpoint

export default function LoggerForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const stack = e.target.stack.value;
    const level = e.target.level.value;
    const pkg = e.target.pkg.value;
    const message = e.target.message.value;

    try {
      await axios.post(API_URL, { stack, level, package: pkg, message });
      toast.success("Log sent successfully!");
    } catch (error) {
      toast.error("Failed to send log.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg bg-white w-full max-w-lg">
      <h2 className="font-bold text-2xl mb-6 text-gray-800 text-center">Logger UI</h2>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Stack</label>
        <select name="stack" className="w-full p-2 rounded border" required>
          <option value="backend">Backend</option>
          <option value="frontend">Frontend</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Level</label>
        <select name="level" className="w-full p-2 rounded border" required>
          {["debug", "info", "warn", "error", "fatal"].map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Package</label>
        <select name="pkg" className="w-full p-2 rounded border" required>
          {[
            "cache", "controller", "cron_job", "db", "domain", "handler", "repository", "route", "service",
            "auth", "config", "middleware", "utils",
            "component", "hook", "page", "state", "style"
          ].map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-gray-700">Message</label>
        <input name="message" className="w-full p-2 rounded border" required />
      </div>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 w-full font-bold transition">
        Send Log
      </button>
    </form>
  );
}
