export type BookingPayload = {
  name: string;
  phone: string;
  email?: string;
  method: string;
  message: string;
  consent?: boolean;
  company?: string;
};

export function validateBooking(input: Partial<BookingPayload>) {
  if (input.company) return null;
  if (!input.name || input.name.trim().length < 2) return "Укажите имя.";
  if (!input.phone || input.phone.trim().length < 5) return "Укажите телефон.";
  if (!input.message || input.message.trim().length < 10) return "Опишите ситуацию чуть подробнее.";
  if (!input.method) return "Выберите способ связи.";
  if (!input.consent) return "Нужно согласие на обработку данных.";
  return null;
}
