import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Phone, Mail, MapPin, Waves, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BeachLabReservationPortal() {
  const roomOptions = [
    { name: "Villa 1", price: 8800 },
    { name: "Villa 2", price: 7500 },
    { name: "Villa 3", price: 7500 },
    { name: "Guest Room 1", price: 7500 },
    { name: "Guest Room 2", price: 8800 },
  ];

  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const reservationMessage = encodeURIComponent(
    `Hi BeachLab! I would like to make a reservation.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCheck-in: ${form.checkIn}\nCheck-out: ${form.checkOut}\nGuests: ${form.guests}\nMessage: ${form.message}`
  );

  const messengerLink = "https://m.me/BeachLabPH";
  const whatsappLink = `https://wa.me/639770769680?text=${reservationMessage}`;
  const emailLink = `mailto:thebeachlab18@gmail.com?subject=BeachLab Reservation Inquiry&body=${reservationMessage}`;

  const bankDetails = {
    bankName: "YOUR BANK NAME",
    accountName: "YOUR ACCOUNT NAME",
    accountNumber: "YOUR ACCOUNT NUMBER",
  };

  const paypalLink = "https://www.paypal.com/paypalme/YOURPAYPALUSERNAME";
  const gcashNumber = "YOUR GCASH NUMBER";
  const gcashName = "YOUR GCASH NAME";
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  const bookingReference = `BL-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-orange-50 text-slate-800">
      <section className="relative overflow-hidden px-6 py-16 md:px-12 lg:px-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#38bdf8,_transparent_35%),radial-gradient(circle_at_bottom_right,_#fb923c,_transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm">
              <Waves className="h-4 w-4" />
              Tabuelan, Cebu Beach Stay
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Reserve Your BeachLab Getaway
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Experience the beauty of Tabuelan’s white sandbar, relaxing beach vibes, and unforgettable sunsets at The BeachLab.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl px-6 py-6 text-base shadow-md">
                <a href="#reservation">Book Now</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl px-6 py-6 text-base bg-white/70">
                <a href={messengerLink} target="_blank" rel="noreferrer">Message Us</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-white p-4 shadow-2xl"
          >
            <div className="flex aspect-[4/3] items-end rounded-[1.5rem] bg-gradient-to-br from-sky-300 via-cyan-100 to-orange-200 p-8">
              <div className="rounded-3xl bg-white/85 p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">The BeachLab</p>
                <h2 className="mt-1 text-2xl font-bold">Sun. Sandbar. Smiles.</h2>
                <p className="mt-2 text-sm text-slate-600">Your private coastal escape in Tabuelan, Cebu.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            { icon: MapPin, title: "Location", text: "Maravilla, Tabuelan, Cebu" },
            { icon: Users, title: "Perfect For", text: "Families, friends, outings, and celebrations" },
            { icon: CalendarDays, title: "Easy Booking", text: "Send your preferred dates and number of guests" },
          ].map((item) => (
            <Card key={item.title} className="rounded-3xl border-0 shadow-md">
              <CardContent className="p-6">
                <item.icon className="mb-4 h-8 w-8 text-sky-600" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="reservation" className="px-6 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold md:text-4xl">Reservation Portal</h2>
            <p className="text-slate-600 leading-7">
              Fill out your details below. After clicking your preferred button, your reservation inquiry will open in Messenger, WhatsApp, or Email.
            </p>

            <div className="rounded-3xl bg-white p-6 shadow-md">
              <h3 className="mb-4 font-bold">Contact Details</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0977 076 9680</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> thebeachlab18@gmail.com</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Maravilla, Tabuelan, Cebu</p>
              </div>
            </div>
          </div>

          <Card className="rounded-[2rem] border-0 shadow-xl">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-sky-300" />
                <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-sky-300" />
                <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-sky-300 md:col-span-2" />
                <input name="checkIn" type="date" value={form.checkIn} onChange={handleChange} className="rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-sky-300" />
                <input name="checkOut" type="date" value={form.checkOut} onChange={handleChange} className="rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-sky-300" />
                <input name="guests" placeholder="Number of Guests" value={form.guests} onChange={handleChange} className="rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-sky-300 md:col-span-2" />
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Choose Your Room</label>
                  <div className="grid gap-3 md:grid-cols-2">
                    {roomOptions.map((room) => (
                      <button
                        type="button"
                        key={room.name}
                        onClick={() => setSelectedRoom(room)}
                        className={`rounded-2xl border p-4 text-left transition-all ${selectedRoom.name === room.name ? 'border-sky-500 bg-sky-50 ring-2 ring-sky-200' : 'bg-white hover:border-sky-300'}`}
                      >
                        <h4 className="font-bold">{room.name}</h4>
                        <p className="mt-1 text-sm text-slate-600">₱{room.price.toLocaleString()} / night</p>
                      </button>
                    ))}
                  </div>
                </div>

                <textarea name="message" placeholder="Special request or question" value={form.message} onChange={handleChange} rows={4} className="rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-sky-300 md:col-span-2" />
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <Button asChild className="rounded-2xl py-6">
                  <a href={messengerLink} target="_blank" rel="noreferrer"><Send className="mr-2 h-4 w-4" /> Messenger</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl py-6">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl py-6">
                  <a href={emailLink}>Email</a>
                </Button>
              </div>

              <div className="mt-6 rounded-3xl bg-orange-50 p-5 border border-orange-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Selected Room</h3>
                    <p className="text-sm text-slate-600">{selectedRoom.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Starting Rate</p>
                    <p className="text-2xl font-bold text-orange-600">₱{selectedRoom.price.toLocaleString()}</p>
                  </div>
                </div>

                <Button onClick={() => setShowCheckout(true)} className="mt-5 w-full rounded-2xl py-6 text-base">
                  Proceed to Checkout
                </Button>
              </div>

              {showCheckout && (
                <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">Checkout Agreement</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Please review and agree to the terms before proceeding with payment.
                  </p>

                  <div className="mt-4 space-y-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                    <p><strong>Cancellation Policy:</strong> Cancellations made at least 7 days before check-in may be moved to another available date, subject to approval.</p>
                    <p><strong>Late Cancellation:</strong> Cancellations made less than 7 days before check-in may be non-refundable.</p>
                    <p><strong>No Show:</strong> No-show bookings are non-refundable.</p>
                    <p><strong>Rescheduling:</strong> Rescheduling is allowed once only and must be requested before the cancellation deadline.</p>
                    <p><strong>Payment Confirmation:</strong> Reservation is confirmed only after payment has been verified by The BeachLab.</p>
                  </div>

                  <label className="mt-4 flex items-start gap-3 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 h-4 w-4"
                    />
                    <span>I have read and agree to The BeachLab reservation, cancellation, rescheduling, and payment terms.</span>
                  </label>

                  <div className={`mt-5 rounded-3xl p-5 ${acceptedTerms ? 'bg-sky-50' : 'bg-slate-100 opacity-60'}`}>
                    <h3 className="text-lg font-bold text-slate-900">Choose Payment Method</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Selected room: <strong>{selectedRoom.name}</strong> — ₱{selectedRoom.price.toLocaleString()}
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <h4 className="font-semibold">GCash</h4>
                        <div className="mt-3 space-y-1 text-sm text-slate-600">
                          <p><strong>Name:</strong> {gcashName}</p>
                          <p><strong>Number:</strong> {gcashNumber}</p>
                        </div>
                        <p className="mt-3 text-xs text-slate-500">Send proof of payment after transfer.</p>
                      </div>

                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <h4 className="font-semibold">PayPal</h4>
                        <p className="mt-3 text-sm text-slate-600">Pay securely through PayPal.</p>
                        <Button asChild disabled={!acceptedTerms} variant="outline" className="mt-4 w-full rounded-2xl py-5">
                          <a href={acceptedTerms ? paypalLink : '#'} target="_blank" rel="noreferrer">Pay via PayPal</a>
                        </Button>
                      </div>

                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <h4 className="font-semibold">Bank Transfer</h4>
                        <div className="mt-3 space-y-1 text-sm text-slate-600">
                          <p><strong>Bank:</strong> {bankDetails.bankName}</p>
                          <p><strong>Account Name:</strong> {bankDetails.accountName}</p>
                          <p><strong>Account Number:</strong> {bankDetails.accountNumber}</p>
                        </div>
                        <p className="mt-3 text-xs text-slate-500">Send proof of payment after transfer.</p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
                      <h3 className="text-lg font-bold text-slate-900">Upload Proof of Payment</h3>
                      <p className="mt-2 text-sm text-slate-600">
                        After payment, please upload a screenshot or photo of your receipt for verification.
                      </p>

                      <div className="mt-5 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          className="mx-auto block text-sm text-slate-600"
                        />
                        <p className="mt-3 text-xs text-slate-500">
                          Accepted files: JPG, PNG, PDF
                        </p>
                      </div>

                      <Button
                        onClick={() => setReservationSubmitted(true)}
                        className="mt-5 w-full rounded-2xl py-6 text-base"
                        disabled={!acceptedTerms}
                      >
                        Submit Reservation
                      </Button>

                      <p className="mt-3 text-center text-xs text-slate-500">
                        Your reservation will remain pending until payment verification is completed.
                      </p>

                      {reservationSubmitted && (
                        <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-6 text-center">
                          <h3 className="text-2xl font-bold text-green-700">Reservation Submitted Successfully</h3>
                          <p className="mt-3 text-slate-700">
                            Thank you for choosing The BeachLab 🌴
                          </p>
                          <p className="mt-2 text-sm text-slate-600">
                            Your payment proof has been received and is currently pending verification.
                          </p>

                          <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm inline-block">
                            <p className="text-xs uppercase tracking-widest text-slate-500">Booking Reference</p>
                            <p className="mt-1 text-2xl font-bold text-slate-900">{bookingReference}</p>
                          </div>

                          <div className="mt-5 space-y-2 text-sm text-slate-600">
                            <p>Selected Room: <strong>{selectedRoom.name}</strong></p>
                            <p>Amount: <strong>₱{selectedRoom.price.toLocaleString()}</strong></p>
                            <p>Status: <span className="font-semibold text-orange-600">Pending Verification</span></p>
                          </div>

                          <p className="mt-5 text-xs text-slate-500">
                            The BeachLab team will contact you once your reservation has been confirmed.
                          </p>
                        </div>
                      )}

                      <p className="mt-3 text-center text-xs text-slate-500">
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 rounded-3xl bg-sky-50 p-5">
                <h3 className="text-lg font-bold text-slate-900">Payment Options</h3>
                <p className="mt-2 text-sm text-slate-600">
                  To secure your reservation, you may send your payment through Bank-to-Bank transfer or PayPal after your date is confirmed.
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <h4 className="font-semibold">Bank-to-Bank Transfer</h4>
                    <div className="mt-3 space-y-1 text-sm text-slate-600">
                      <p><strong>Bank:</strong> {bankDetails.bankName}</p>
                      <p><strong>Account Name:</strong> {bankDetails.accountName}</p>
                      <p><strong>Account Number:</strong> {bankDetails.accountNumber}</p>
                    </div>
                    <p className="mt-3 text-xs text-slate-500">
                      Please send proof of payment after transfer for verification.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <h4 className="font-semibold">PayPal</h4>
                    <p className="mt-3 text-sm text-slate-600">
                      Pay securely through PayPal using the button below.
                    </p>
                    <Button asChild variant="outline" className="mt-4 w-full rounded-2xl py-5">
                      <a href={paypalLink} target="_blank" rel="noreferrer">Pay via PayPal</a>
                    </Button>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-slate-500">
                This form sends an inquiry only. Reservation is confirmed after BeachLab confirms availability and verifies payment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
