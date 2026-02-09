import { Button } from "@/components/ui/button";
import { Monitor, Clock, MessageCircle, Layers } from "lucide-react";

const highlights = [
  { icon: Layers, label: "4-part guided structure" },
  { icon: Clock, label: "Work at your own pace" },
  { icon: MessageCircle, label: "Direct input from Rachel" },
  { icon: Monitor, label: "Online from anywhere" },
];

const OnlineWorkshop = () => {
  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Accent dots */}
          <div className="flex justify-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="w-3 h-3 rounded-full bg-secondary" />
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="w-3 h-3 rounded-full bg-art-blue" />
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Online Coat Workshop
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Join Rachel for a guided experience in creating a one-of-a-kind coat. Students
            learn construction, design, piecing, and embellishment while developing a garment
            that reflects personality, culture, humor, or values. Suitable for most skill levels.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center gap-2 bg-background rounded-lg px-4 py-5"
              >
                <h.icon size={24} className="text-primary" />
                <span className="text-sm font-medium text-foreground text-center">
                  {h.label}
                </span>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="text-base px-8">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OnlineWorkshop;
