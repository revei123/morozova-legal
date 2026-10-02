export type BookingPayload = {
  topic: string;
  name: string;
  phone: string;
  email: string;
  method: string;
  message: string;
  company?: string;
};

export function validateBooking(input: Partial<BookingPayload>) {
  if (input.company) return null;
  if (!input.topic) return "Выберите тему.";
  if (!input.name || input.name.trim().length < 2) return "Укажите имя.";
  if (!input.phone || input.phone.trim().length < 5) return "Укажите телефон.";
  if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return "Укажите корректный email.";
  if (!input.message || input.message.trim().length < 10) return "Опишите вопрос чуть подробнее.";
  return null;
}
