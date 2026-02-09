import { ImageIcon, Quote } from "lucide-react";

const AboutRachel = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait placeholder */}
          <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center order-2 lg:order-1">
            <ImageIcon size={64} className="text-muted-foreground/30" />
          </div>

          {/* Bio content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Rachel
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Rachel D.K. Clark is a contemporary folk artist and educator whose work bridges
                traditional quilt-making and bold wearable art. She began creating wearable art
                in 1973 and has taught nationally since 1990.
              </p>
              <p>
                Her work has appeared in gallery shows, <em>Threads</em> magazine, and{" "}
                <em>The Quilting Quarterly</em> on HGTV's <em>Simply Quilts</em>.
              </p>
              <p>
                Rachel comes from a long line of sewers beginning with her great-grandmother.
                Her garments mix culture, humor, and storytelling into pieces that invite
                conversation.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-l-primary pl-6 py-2">
              <Quote size={24} className="text-primary mb-2" />
              <p className="text-foreground italic text-lg leading-relaxed">
                "Every garment tells a story. I just make sure it's one worth wearing."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Rachel D.K. Clark</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRachel;
