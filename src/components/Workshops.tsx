import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Users, Globe, BookOpen } from "lucide-react";

const workshops = [
  { title: "Coat Making Class", description: "Construct a fully lined, one-of-a-kind coat from start to finish." },
  { title: "Vest Making Class", description: "Design and sew a show-stopping vest with pieced fabrics." },
  { title: "Fancywork Collection Coat", description: "Advanced techniques for building a heavily embellished coat." },
  { title: "Technique Class", description: "Master specific skills like appliqué, piecing, and embroidery." },
  { title: "Tiered Skirt & Big Shirt", description: "Create a versatile tiered skirt with a coordinating oversized shirt." },
  { title: "Making Your Next Statement", description: "Push creative boundaries to produce a garment that truly speaks." },
];

const details = [
  { icon: Users, label: "12–18 students per class" },
  { icon: BookOpen, label: "Flexible curriculum" },
  { icon: Globe, label: "In-person & online options" },
  { icon: Scissors, label: "All skill levels welcome" },
];

const Workshops = () => {
  return (
    <section id="workshops" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Workshops & Classes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Rachel offers hands-on workshops designed for all skill levels. Classes range
            from beginner-friendly technique sessions to advanced garment construction.
          </p>
        </div>

        {/* Workshop grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {workshops.map((ws) => (
            <Card key={ws.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Scissors size={20} className="text-primary mb-3" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {ws.title}
                </h3>
                <p className="text-sm text-muted-foreground">{ws.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Details strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {details.map((d) => (
            <div
              key={d.label}
              className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3"
            >
              <d.icon size={20} className="text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{d.label}</span>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="text-base px-8">
          <a href="#contact">Request Workshop Info</a>
        </Button>
      </div>
    </section>
  );
};

export default Workshops;
