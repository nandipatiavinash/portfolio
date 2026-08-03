"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Input, Textarea, Button } from "@/components/ui/primitives";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-bronze/30 bg-paper-dim p-8">
        <p className="font-mono text-xs tracking-wide text-blueprint">SENT</p>
        <p className="mt-3 text-xl leading-snug">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      <div>
        <label htmlFor="name" className="font-mono text-xs tracking-wide text-graphite/70">
          NAME
        </label>
        <Input id="name" name="name" required placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs tracking-wide text-graphite/70">
          EMAIL
        </label>
        <Input id="email" name="email" type="email" required placeholder="you@company.com" />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs tracking-wide text-graphite/70">
          WHAT ARE YOU DEALING WITH?
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A short description of the process, system, or problem is plenty to start."
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-700">{state.message}</p>
      )}

      <Button type="submit" size="lg" disabled={isPending}>
        {isPending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
