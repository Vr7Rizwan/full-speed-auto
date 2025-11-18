function Banner({ brand }: { brand: string }) {
  return (
    <div
      style={{ backgroundImage: `url('/assets/brands/${brand}.webp')` }}
      className="h-screen bg-cover"
    >
      Yo
    </div>
  );
}

export default Banner;
