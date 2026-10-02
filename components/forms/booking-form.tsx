"use client";

import { FormEvent, useState } from "react";
import { validateBooking } from "@/lib/contact";

const methods = ["Телефон", "Telegram", "Онлайн"];

export function BookingForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    method: "Телефон",
    message: "",
    consent: false,
    company: "",
  });

  function update(key: string, value: string | boolean) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const message = validateBooking(form);
    if (message) return setError(message);
    setPending(true);
    setError("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setPending(false);
    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      return setError(data?.error ?? "Не удалось отправить заявку.");
    }
    setDone(true);
  }

  if (done) {
    return (
      <p className="border border-line bg-sheet px-5 py-6 text-lg" role="status">
        Спасибо. Заявка отправлена. Это прототип: сообщение никуда не уходит, форма только показывает, как будет выглядеть запись.
      </p>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={submit} noValidate>
      <Field label="Имя" id="name" value={form.name} onChange={(value) => update("name", value)} />
      <Field label="Телефон" id="phone" value={form.phone} onChange={(value) => update("phone", value)} />
      <label className="grid gap-2 text-sm" htmlFor="message">
        Кратко опишите ситуацию
        <textarea
          id="message"
          required
          minLength={10}
          rows={5}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="border border-line bg-sheet px-3 py-3 text-base"
        />
      </label>
      <fieldset className="grid gap-2">
        <legend className="text-sm">Предпочтительный способ связи</legend>
        <div className="flex flex-wrap gap-4">
          {methods.map((method) => (
            <label key={method} className="inline-flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="method"
                value={method}
                checked={form.method === method}
                onChange={() => update("method", method)}
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex items-start gap-3 text-sm leading-6">
        <input
          type="checkbox"
          className="mt-1"
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
        />
        <span>
          Соглашаюсь на обработку персональных данных.{" "}
          <a href="/privacy" className="underline">
            Политика конфиденциальности
          </a>
        </span>
      </label>
      <label className="hidden" aria-hidden>
        Компания
        <input tabIndex={-1} autoComplete="off" value={form.company} onChange={(event) => update("company", event.target.value)} />
      </label>
      {error ? <p className="text-sm text-red-800">{error}</p> : null}
      <button type="submit" disabled={pending} className="bg-accent px-5 py-3 text-sheet hover:bg-ink disabled:opacity-60">
        {pending ? "Отправка…" : "Записаться на консультацию"}
      </button>
      <p className="text-sm leading-6 text-muted">После получения заявки мы свяжемся с вами для согласования удобного времени.</p>
    </form>
  );
}

function Field({ label, id, value, onChange }: { label: string; id: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-sm" htmlFor={id}>
      {label}
      <input
        id={id}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="border border-line bg-sheet px-3 py-3 text-base"
      />
    </label>
  );
}
