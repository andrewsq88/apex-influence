import { LEGAL_CONTACT_EMAIL } from "@/components/legal/LegalPage";

const BUDGETS: Record<string, string> = {
  "under-10k": "Under $10K",
  "10k-50k": "$10K-$50K",
  "50k-100k": "$50K-$100K",
  "100k+": "$100K+",
};

/** Builds a mailto: link with the subject and body prefilled from the form. Nothing is sent to our servers. */
export function buildMailto(form: { name: string; email: string; company: string; budget: string; message: string }): string {
  const subject = `Project enquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`;
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Company: ${form.company || "-"}`,
    `Budget: ${BUDGETS[form.budget] ?? "-"}`,
    "",
    form.message,
  ].join("\n");
  return `mailto:${LEGAL_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
