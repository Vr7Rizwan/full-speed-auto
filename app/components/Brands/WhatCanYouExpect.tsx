function WhatCanYouExpect({
  whatToExpect,
}: {
  whatToExpect: string[] | undefined;
}) {
  return (
    <div className="flex flex-col justify-center w-[95%] mx-auto gap-4">
      <h2 className="subHeading">What can you expect at SPEED FULL AUTO?</h2>
      <ul>
        {whatToExpect?.map((eachLine, i) => (
          <li className="list-disc normalText" key={eachLine + i}>
            {eachLine}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhatCanYouExpect;
