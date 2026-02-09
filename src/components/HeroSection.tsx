import { Button } from "@/components/ui/button";
import { Palette, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background placeholder for hero image */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <Palette size={400} strokeWidth={0.5} />
        </div>
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Color accent bar */}
          <div className="flex gap-2 mb-8">
            <span className="w-12 h-1.5 rounded-full bg-primary" />
            <span className="w-8 h-1.5 rounded-full bg-secondary" />
            <span className="w-6 h-1.5 rounded-full bg-accent" />
            <span className="w-4 h-1.5 rounded-full bg-art-blue" />
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Wearable Art
            <br />
            That Speaks.
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-6 max-w-2xl">
            Contemporary folk art, fashion shows, and workshops by Rachel D.K. Clark.
          </p>

          <p className="text-base text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Rachel D.K. Clark is a contemporary folk artist, teacher, and lecturer with over
            50 years of experience creating wearable art. Known for eclectic fabric mixes,
            vibrant design, and humor, Rachel transforms garments into personal and cultural
            statements.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base px-8">
              <a href="#garments">View Garments</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="text-base px-8">
              <a href="#contact">Book Rachel</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="#workshops">
                <Sparkles size={18} className="mr-2" />
                Explore Workshops
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
