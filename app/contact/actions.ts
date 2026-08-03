"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

/**
 * Server action stub. Wire this up to your provider of choice —
 * Resend, Postmark, a Slack webhook, or a database insert.
 * Left intentionally unimplemented so no third-party keys are
 * assumed for you.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field." };
  }

  // TODO: send the email / notification here.
  // await resend.emails.send({ ... })

  return {
    status: "success",
    message: "Thanks — I'll reply within one business day.",
  };
}
