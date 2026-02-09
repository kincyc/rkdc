const Footer = () => {
  return (
    <footer className="py-8 border-t bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-sm font-medium text-foreground">
            Rachel D.K. Clark
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="w-3 h-3 rounded-full bg-secondary" />
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="w-3 h-3 rounded-full bg-art-blue" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
