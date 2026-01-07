export const Mission = () => {
  return (
    <section 
      id="mission"
      data-section="mission"
      className="w-full py-16 md:py-20 bg-background"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Two stacked text blocks, left-aligned with large vertical spacing */}
        <div className="space-y-16 md:space-y-20">
          {/* First Block: Who Joy Drop Is For */}
          <div className="space-y-3">
            <h2 className="text-foreground">
              Who Joy Drop Is For
            </h2>
            <p className="text-foreground/80 max-w-2xl">
              A community-led holiday program built to help children feel supported, confident, and cared for.
            </p>
          </div>

          {/* Second Block: Meeting Real Needs */}
          <div className="space-y-3">
            <h2 className="text-foreground">
              Meeting Real Needs
            </h2>
            <p className="text-foreground/80 max-w-2xl">
              We step in knowing we don't always see what life looks like for these children the other days of the year. That's why essentials matter just as much as wishes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

