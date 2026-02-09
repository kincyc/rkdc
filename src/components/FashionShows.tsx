import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Monitor, Sliders, Star } from "lucide-react";

const shows = [
  { title: "Clothing for the Body & the Soul", description: "A journey through garments that nourish both body and spirit." },
  { title: "Ethnic and Ethnically-Influenced Garments", description: "Celebrating global textile traditions through wearable art." },
  { title: "Everybody Git de Blues Sometime", description: "Blues-inspired garments that tell stories of resilience and joy." },
  { title: "Not Just Another Coat", description: "Proving that coats can be canvases for self-expression." },
  { title: "So You Got Something to Celebrate", description: "Garments crafted for life's most meaningful moments." },
];

const features = [
  { icon: Clock, label: "Approximately 1 hour" },
  { icon: Users, label: "6–8 group members model" },
  { icon: Monitor, label: "In-person or online" },
  { icon: Sliders, label: "Customizable to audience" },
];

const FashionShows = () => {
  return (
    <section id="fashion-shows" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Fashion Shows & Lectures
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Rachel presents hosted fashion shows featuring over twenty original garments.
            Each show blends visual excitement with storytelling, humor, and audience
            participation.
          </p>
        </div>

        {/* Shows grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {shows.map((show) => (
            <Card key={show.title} className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <Star size={20} className="text-accent mb-3" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {show.title}
                </h3>
                <p className="text-sm text-muted-foreground">{show.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {features.map((feat) => (
            <div
              key={feat.label}
              className="flex items-center gap-3 bg-background rounded-lg px-4 py-3"
            >
              <feat.icon size={20} className="text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{feat.label}</span>
            </div>
          ))}
        </div>

        <Button asChild size="lg" variant="secondary" className="text-base px-8">
          <a href="#contact">Book a Fashion Show</a>
        </Button>
      </div>
    </section>
  );
};

export default FashionShows;
