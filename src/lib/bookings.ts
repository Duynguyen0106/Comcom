import { randomBytes } from "crypto";
import { promises as fs } from "fs";
import path from "path";

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

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "bookings.json");

async function readAll(): Promise<Booking[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as Booking[];
  } catch {
    return [];
  }
}

async function writeAll(bookings: Booking[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(bookings, null, 2), "utf8");
}

function makeReference() {
  return `CC-${randomBytes(3).toString("hex").toUpperCase()}`;
}

export async function createBooking(input: BookingInput): Promise<Booking> {
  const bookings = await readAll();
  const booking: Booking = {
    ...input,
    id: randomBytes(8).toString("hex"),
    reference: makeReference(),
    createdAt: new Date().toISOString(),
    venue: "Com Com Battersea",
  };
  bookings.push(booking);
  await writeAll(bookings);
  return booking;
}
