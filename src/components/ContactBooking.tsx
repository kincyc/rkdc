import { Mail, Phone, MapPin } from "lucide-react";

const ContactBooking = () => {
  return (
    <section id="contact" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Book Rachel
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Interested in booking Rachel for a guild, conference, workshop, or fashion show?
            Reach out directly — she'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:rachel@racheldkclark.com"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  rachel@racheldkclark.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+18315551234"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  (831) 555-1234
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Watsonville, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBooking;
