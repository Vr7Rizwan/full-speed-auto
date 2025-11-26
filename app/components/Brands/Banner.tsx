const Banner = ({ banner }: { banner: string | undefined }) => {
  return (
    <section>
      {banner && (
        <div className="w-full overflow-hidden">
          <img
            src={banner}
            alt="Hero"
            className="w-full max-h-[530px] object-cover"
          />
        </div>
      )}
    </section>
  );
};
export default Banner;
