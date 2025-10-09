import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'kimoel_leotagle@yahoo.com',
      href: 'mailto:kimoel_leotagle@yahoo.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+63 (043) 233 - 2566',
      href: 'tel:+63432332566',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Address',
      value: 'Purok 1, Brgy. Lodlod, Lipa City, Batangas 4217 Philippines',
      href: 'https://maps.app.goo.gl/xSc6w4EyVPZsqq2t6',
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook',
      value: 'Kimoel Trading and Construction Incorporated',
      href: 'https://www.facebook.com/profile.php?id=100075976223841',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to discuss your project needs? Get in touch with our team of experts today.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-background rounded-lg shadow-card hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white transition-transform duration-300 group-hover:scale-110">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-blue-dark mb-2 transition-colors duration-300 group-hover:text-primary">
                  {info.label}
                </h3>

                {/* Make all links clickable */}
                {info.href === '#' ? (
                  <p className="text-muted-foreground">{info.value}</p>
                ) : (
                  <a
                    href={info.href}
                    target={info.label === 'Facebook' || info.label === 'Address' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Send a Message Button - Opens Gmail */}
          <div className="text-center">
            <Button
              variant="hero"
              size="lg"
              className="shadow-button"
              onClick={() =>
                window.open(
                  'https://mail.google.com/mail/?view=cm&fs=1&to=kimoel_leotagle@yahoo.com&su=Inquiry%20from%20Website&body=Hello%20KIMOEL%20Trading%20and%20Construction%2C%0A%0AI%27d%20like%20to%20inquire%20about...'
                )
              }
            >
              Send a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
