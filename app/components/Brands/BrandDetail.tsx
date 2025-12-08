interface brandDetailPropType {
  heroText: string | undefined;
  description: string | undefined;
}
const BrandDetail = ({ heroText, description }: brandDetailPropType) => {
  return (
    <section className="flex justify-center py-2 md:py-5 md:pt-30">
      {heroText && description && (
        <div className="w-[92%] md:w-[95%] mx-auto flex flex-col gap-3">
          <div className="flex flex-col gap-5">
            <p className="text-txtColor hidden md:block subHeading font-bold text-justify">{heroText}</p>

            <p className="text-txtColor normalText text-justify">{description}</p>
          </div>
        </div>
      )}
    </section>
  );
};
export default BrandDetail;
