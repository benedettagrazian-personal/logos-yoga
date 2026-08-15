"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2"
      aria-label="Iscriviti alla newsletter"
    >
      <input
        type="email"
        placeholder="La tua email"
        required
        className="flex-1 bg-[#4a3a2c] text-[#F5F1EB] placeholder:text-[#E8DFD0]/50 text-sm px-4 py-2 rounded-full border border-[#E8DFD0]/20 focus:outline-none focus:border-[#B8CEDE] transition-colors"
        aria-label="Indirizzo email per la newsletter"
      />
      <button
        type="submit"
        className="bg-[#B8CEDE] text-[#5C4A3A] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#F5F1EB] transition-colors whitespace-nowrap"
      >
        Iscriviti
      </button>
    </form>
  );
}
