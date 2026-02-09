import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ImageIcon } from "lucide-react";

const collections = [
  "All",
  "The Year of the Coat",
  "Blue Collection",
  "Ethnically Influenced",
  "Celebration Pieces",
] as const;

type Collection = (typeof collections)[number];

interface GarmentItem {
  id: number;
  title: string;
  collection: Exclude<Collection, "All">;
  description: string;
}

const garments: GarmentItem[] = [
  { id: 1, title: "Patchwork Statement Coat", collection: "The Year of the Coat", description: "A bold full-length coat combining vintage fabrics and contemporary quilting." },
  { id: 2, title: "Heritage Overcoat", collection: "The Year of the Coat", description: "Layered textures and handmade embroidery tell a generational story." },
  { id: 3, title: "Winter Mosaic Coat", collection: "The Year of the Coat", description: "Warm tones woven into a mosaic of cultural patterns." },
  { id: 4, title: "Indigo Dreams Vest", collection: "Blue Collection", description: "Deep indigo dyed fabrics assembled into a striking vest." },
  { id: 5, title: "Ocean Breeze Jacket", collection: "Blue Collection", description: "Flowing blues inspired by the Pacific coast." },
  { id: 6, title: "Midnight Ensemble", collection: "Blue Collection", description: "A full ensemble in varying shades of midnight blue." },
  { id: 7, title: "Global Threads Coat", collection: "Ethnically Influenced", description: "Fabrics sourced from around the world, honoring textile traditions." },
  { id: 8, title: "African Motif Vest", collection: "Ethnically Influenced", description: "Vibrant African-inspired prints in a modern silhouette." },
  { id: 9, title: "Festival Dress", collection: "Celebration Pieces", description: "A show-stopping dress designed for life's biggest moments." },
  { id: 10, title: "Jubilee Coat", collection: "Celebration Pieces", description: "Joy and color sewn into every seam of this celebration coat." },
  { id: 11, title: "Anniversary Jacket", collection: "Celebration Pieces", description: "A wearable tribute to milestones and memories." },
  { id: 12, title: "Sapphire Skirt Set", collection: "Blue Collection", description: "Tiered skirt with coordinating top in sapphire tones." },
];

const GarmentsGallery = () => {
  const [activeFilter, setActiveFilter] = useState<Collection>("All");
  const [selectedGarment, setSelectedGarment] = useState<GarmentItem | null>(null);

  const filtered =
    activeFilter === "All"
      ? garments
      : garments.filter((g) => g.collection === activeFilter);

  return (
    <section id="garments" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Garments
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Rachel's garments range from whimsical to political to deeply personal. Each piece
            reflects her foundation in traditional quilt making while pushing the boundaries of
            wearable art.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {collections.map((col) => (
            <button
              key={col}
              onClick={() => setActiveFilter(col)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === col
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {col}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((garment) => (
            <button
              key={garment.id}
              onClick={() => setSelectedGarment(garment)}
              className="group text-left bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
            >
              {/* Placeholder image */}
              <div className="aspect-[3/4] bg-muted flex items-center justify-center relative overflow-hidden">
                <ImageIcon
                  size={48}
                  className="text-muted-foreground/30"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {garment.title}
                </h3>
                <p className="text-sm text-muted-foreground">{garment.collection}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <Dialog open={!!selectedGarment} onOpenChange={() => setSelectedGarment(null)}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="font-heading text-xl">
            {selectedGarment?.title}
          </DialogTitle>
          <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center mb-4">
            <ImageIcon size={64} className="text-muted-foreground/30" />
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            {selectedGarment?.collection}
          </p>
          <p className="text-foreground">{selectedGarment?.description}</p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GarmentsGallery;
