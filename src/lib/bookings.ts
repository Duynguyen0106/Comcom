import { getCloudflareContext } from "@opennextjs/cloudflare";
import { randomBytes } from "crypto";

export type BookingInput = {
  date: string;
  guests: number;
  time: string;
  seating: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
};

export type Booking = BookingInput & {
  id: string;
  reference: string;
  createdAt: string;
  venue: string;
};

const INDEX_KEY = "bookings:index";

type BookingsBinding = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
};

/** In-memory fallback for local `next dev` without Wrangler bindings. */
const memoryStore = new Map<string, string>();

async function getKv(): Promise<BookingsBinding> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const kv = (env as { BOOKINGS?: BookingsBinding }).BOOKINGS;
    if (kv) return kv;
  } catch {
    // Not running inside Cloudflare / OpenNext yet.
  }

  return {
    async get(key) {
      return memoryStore.get(key) ?? null;
    },
    async put(key, value) {
      memoryStore.set(key, value);
    },
  };
}

async function readAll(kv: BookingsBinding): Promise<Booking[]> {
  try {
    const raw = await kv.get(INDEX_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Booking[];
  } catch {
    return [];
  }
}

async function writeAll(kv: BookingsBinding, bookings: Booking[]) {
  await kv.put(INDEX_KEY, JSON.stringify(bookings));
}

function makeReference() {
  return `CC-${randomBytes(3).toString("hex").toUpperCase()}`;
}

export async function createBooking(input: BookingInput): Promise<Booking> {
  const kv = await getKv();
  const bookings = await readAll(kv);
  const booking: Booking = {
    ...input,
    id: randomBytes(8).toString("hex"),
    reference: makeReference(),
    createdAt: new Date().toISOString(),
    venue: "Com Com Battersea",
  };
  bookings.push(booking);
  await writeAll(kv, bookings);
  await kv.put(`booking:${booking.reference}`, JSON.stringify(booking));
  return booking;
}
