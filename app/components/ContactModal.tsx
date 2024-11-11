import React, { useRef } from 'react';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from "../utils";
import emailjs from 'emailjs-com';


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const form = useRef<HTMLFormElement>(null);


  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form.current,
          EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result);
            alert('Message sent successfully!');
            onClose();
            window.location.href = '/';
          },
          (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-screen-xl mx-auto">
        <button
          className="absolute top-10 right-10 bg-primary text-black text-4xl rounded-full w-12 h-12 flex items-center justify-center"
          onClick={onClose}
        >
          &times;
        </button>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  Send us a message and we'll get back to you as soon as possible.
                </p>
                {/* <div className="mt-8">
                  <a href="#" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>
                  <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                </div> */}
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 mt-2 mb-2 text-sm"
                      placeholder="Name"
                      name="from_name"
                      type="text"
                      id="name"
                    />
                  </div>
                    <div>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 mt-2 mb-2 text-sm"
                        placeholder="Email address"
                        type="email"
                        name="from_email"
                        id="email"
                      />
                    </div>
                    {/* <div>
                        <input
                          className="w-full rounded-lg border border-gray-200 p-3 mt-2 mb-2 text-sm"
                          placeholder="Phone Number (optional)"
                          name="phone_number"
                          type="tel"
                          id="phone"
                        />
                      </div> */}
                  <div>
                    <textarea
                      className="w-full rounded-lg border border-gray p-3 mt-2 mb-2 text-sm"
                      placeholder="Message"
                      name="message"
                      rows={8}
                      id="message"
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-black sm:w-auto"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactModal;