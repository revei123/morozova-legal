"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/data/services";
import { validateBooking } from "@/lib/contact";

const steps = ["Выберите тему", "Контактные данные", "Сообщение"];

export function BookingForm() {
  const params = useSearchParams();
  const initial = params.get("topic") ?? "contract";
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    topic: initial,
    name: "",
    phone: "",
    email: "",
    method: "Онлайн",
    message: "",
    company: "",
  });

  const progress = useMemo(() => String(step + 1).padStart(2, "0"), [step]);

  function update(key: string, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function next() {
    if (step === 0 && !form.topic) return setError("Выберите тему.");
    if (step === 1) {
      const message = validateBooking({ ...form, message: "Демонстрационный текст" });
      if (message && message !== "Опишите вопрос чуть подробнее.") return setError(message);
    }
    setError("");
    setStep((value) => Math.min(value + 1, 2));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const message = validateBooking(form);
    if (message) return setError(message);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      return setError(data?.error ?? "Не удалось отправить заявку.");
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="panel p-6" role="status">
        <p className="text-xs font-bold tracking-[0.16em] text-cobalt">03 / 03</p>
        <p className="mt-3 text-2xl font-bold">Спасибо. Заявка отправлена.</p>
        <p className="mt-2 text-sm leading-6 text-muted">Это прототип: письмо никому не уходит, заявка только подтверждает работу формы.</p>
      </div>
    );
  }

  return (
    <form className="panel p-5 sm:p-6" onSubmit={submit} noValidate>
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold tracking-[0.16em] text-cobalt">{progress} / 03</p>
        <p className="text-sm font-semibold">{steps[step]}</p>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-canvas">
        <div className="h-full bg-cobalt transition-all duration-500" style={{ width: `${((step + 1) / 3) * 100}%` }} />
      </div>

      {step === 0 ? (
        <fieldset className="mt-5 grid gap-2">
          <legend className="sr-only">Тема</legend>
          {services.map((item) => (
            <label key={item.slug} className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 ${form.topic === item.topic ? "border-cobalt bg-cobalt/5" : "border-line"}`}>
              <span className="font-semibold">{item.title}</span>
              <input type="radio" name="topic" value={item.topic} checked={form.topic === item.topic} onChange={() => update("topic", item.topic)} />
            </label>
          ))}
        </fieldset>
      ) : null}

      {step === 1 ? (
        <div className="mt-5 grid gap-3">
          <Field label="Имя" id="name" value={form.name} onChange={(value) => update("name", value)} />
          <Field label="Телефон" id="phone" value={form.phone} onChange={(value) => update("phone", value)} />
          <Field label="Email" id="email" type="email" value={form.email} onChange={(value) => update("email", value)} />
          <label className="grid gap-1 text-sm font-semibold" htmlFor="method">
            Формат
            <select id="method" value={form.method} onChange={(event) => update("method", event.target.value)} className="rounded-xl border border-line px-3 py-3 font-medium">
              <option>Онлайн</option>
              <option>Минск</option>
            </select>
          </label>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-5 grid gap-3">
          <label className="grid gap-1 text-sm font-semibold" htmlFor="message">
            Сообщение
            <textarea id="message" required minLength={10} rows={5} value={form.message} onChange={(event) => update("message", event.target.value)} className="rounded-xl border border-line px-3 py-3 font-medium" />
          </label>
          <label className="hidden" aria-hidden>
            Компания
            <input tabIndex={-1} autoComplete="off" value={form.company} onChange={(event) => update("company", event.target.value)} />
          </label>
        </div>
      ) : null}

      {error ? <p className="mt-3 text-sm font-semibold text-red-700">{error}</p> : null}

      <div className="mt-5 flex gap-2">
        {step > 0 ? (
          <button type="button" className="rounded-xl border border-line px-4 py-3 text-sm font-semibold" onClick={() => setStep((value) => value - 1)}>
            Назад
          </button>
        ) : null}
        {step < 2 ? (
          <button type="button" className="rounded-xl bg-cobalt px-4 py-3 text-sm font-semibold text-white hover:bg-cobalt-deep" onClick={next}>
            Далее
          </button>
        ) : (
          <button type="submit" className="rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-cobalt">
            Отправить
          </button>
        )}
      </div>
    </form>
  );
}

function Field({ label, id, value, onChange, type = "text" }: { label: string; id: string; value: string; onChange: (value: string) => void; type?: string }) {
  return (
    <label className="grid gap-1 text-sm font-semibold" htmlFor={id}>
      {label}
      <input id={id} type={type} required value={value} onChange={(event) => onChange(event.target.value)} className="rounded-xl border border-line px-3 py-3 font-medium" />
    </label>
  );
}
