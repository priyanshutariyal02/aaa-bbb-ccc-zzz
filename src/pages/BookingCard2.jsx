import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert.jsx";

const BookingCard2 = () => {
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    rooms: "",
    adults: "",
    children: "",
  });

  const handleReset = () => {
    window.scrollTo(0, 0);
    setForm({
      name: "",
      phone: "",
      email: "",
      checkin: "",
      checkout: "",
      rooms: "",
      adults: "",
      children: "",
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_BOOKING_TEMPLATE_ID,
        {
          from_name: form.name,
          from_phone: form.phone,
          from_email: form.email,
          from_checkin: form.checkin,
          from_checkout: form.checkout,
          from_rooms: form.rooms,
          from_adults: form.adults,
          from_children: form.children,
          form_days: days,
          form_amount: t_room_price,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);

            setForm({
              name: "",
              phone: "",
              email: "",
              checkin: "",
              checkout: "",
              rooms: "",
              adults: "",
              children: "",
            });
          }, [2000]);
        },
        (error) => {
          setIsLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  }

  function calculateNumberOfDays(checkin, checkout) {
    // Parse the check-in and check-out dates
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    // Calculate the difference in milliseconds
    const differenceInMs = checkoutDate - checkinDate;

    // Convert milliseconds to days
    const daysDifference = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    return daysDifference;
  }

  const days = calculateNumberOfDays(form.checkin, form.checkout);

  const discount = 1000 * days;
  const one_room = 7599;
  let t_room_price = 0;

  if (days >= 3) {
    t_room_price = one_room * days * form.rooms - discount;
  } else {
    t_room_price = one_room * days * form.rooms;
  }
  return (
    <div className="w-full min-h-[100vh] pt-[10rem] ">
      <div className="w-full h-full min-h-[100vh] flex justify-center booking-page">
        {/* Form  */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-[60%] pb-[3rem] min-h-[100vh] bg-white mb-[3rem] shadow-xl"
        >
          <h1 className="text-center text-[4rem] py-5 font-bold">
            <span className="text-gray-800">Booking</span>{" "}
            <span className="text-[#ffae00]">Card 2</span>
          </h1>
          <div className="w-full flex flex-col gap-10 justify-center items-center p-10">
            <div className="grid grid-cols-2 gap-8 justify-center book-inp">
              <div>
                <p className="text-black p-2 font-bold">
                  Name <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ex: John Doe"
                  className="border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg"
                  required
                  autoFocus
                />
              </div>
              <div>
                <p className="text-black p-2 font-bold">
                  Phone <span className="text-red-500">*</span>
                </p>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit phone number"
                  className="border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 justify-center book-inp">
              <div>
                <p className="text-black p-2 font-bold">Email</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ex: johndoe@gmail.com"
                  className="border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg"
                />
              </div>
              <div>
                <p className="text-black p-2 font-bold">
                  Check in <span className="text-red-500">*</span>
                </p>
                <input
                  type="date"
                  name="checkin"
                  value={form.checkin}
                  onChange={handleChange}
                  id="checkin"
                  className="border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 justify-center book-inp">
              <div>
                <p className="text-black p-2 font-bold">
                  Check out <span className="text-red-500">*</span>
                </p>
                <input
                  type="date"
                  name="checkout"
                  value={form.checkout}
                  onChange={handleChange}
                  id="checkout"
                  className="border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg"
                  required
                />
              </div>
              <div>
                <p className="text-black p-2 font-bold">
                  Rooms <span className="text-red-500">*</span>{" "}
                  <span className="text-gray-700 font-normal tracking-wide">
                    (₹7,599+taxes/night)
                  </span>
                </p>
                <input
                  name="rooms"
                  type="number"
                  id="rooms"
                  value={form.rooms}
                  onChange={handleChange}
                  placeholder="number of rooms"
                  className="border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 justify-center book-inp">
              <div>
                <p className="text-black p-2 font-bold">Adults</p>
                <input
                  type="number"
                  name="adults"
                  id="adults"
                  value={form.adults}
                  onChange={handleChange}
                  placeholder="number of adults"
                  className="border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg"
                />
              </div>
              <div>
                <p className="text-black p-2 font-bold">Children</p>
                <input
                  type="number"
                  name="children"
                  id="children"
                  value={form.children}
                  onChange={handleChange}
                  placeholder="number of children"
                  className="border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg"
                />
              </div>
            </div>
          </div>
          <hr className="w-[80%] mx-auto my-5 border-gray-400" />

          <div className="w-[full] text-black booking-details">
            <div className="flex flex-col gap-10 justify-center items-center p-10">
              {alert.show && <Alert {...alert} />}
              <h1 className="font-semibold text-5xl mb-8 tracking-wider">
                Booking <span className="text-[#ffae00]">Details</span>
              </h1>
              <table className="border-collapse w-full grid items-center justify-center text-lg tracking-wider">
                <tbody>
                  <tr className="border-b border-black px-5">
                    <th className="p-2 text-left">Name:</th>
                    <td className="p-2">{form.name ? form.name : undefined}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 text-left">Phone:</th>
                    <td className="p-2">
                      {form.phone ? form.phone : undefined}
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 text-left">No. of night:</th>
                    <td className="p-2">
                      {days <= 0 ? (
                        <p className="text-[red] font-semibold">
                          Enter valid dates
                        </p>
                      ) : (
                        days
                      )}
                    </td>
                  </tr>
                  <tr className="text-4xl tracking-wide">
                    <th className="p-2 text-left font-semibold">Total:</th>
                    <td className="p-2 font-semibold">
                      ₹{days && t_room_price ? t_room_price : "0"}{" "}
                      {t_room_price > 0 ? (
                        <span className="text-lg text-red-500">
                          (+Exclusive of all taxes)
                        </span>
                      ) : undefined}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className="w-[80%] mx-auto my-5 border-gray-400" />
          <div className="pt-10 flex justify-center gap-10">
            <button
              type="reset"
              onClick={handleReset}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition duration-200"
            >
              reset
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-200"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Booking Details */}
      </div>
    </div>
  );
};

export default BookingCard2;
