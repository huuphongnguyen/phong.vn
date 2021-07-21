export default function ArchillectToast({ item }) {
  return (
    <div className="space-y-2">
      <h3 className="text-base font-bold font-sourcecodepro text-black">
        BLOCK: {item.id}
      </h3>
      <img src={item.imageSource} />
      <p className="text-black text-base font-sourcecodepro">
        References:
        <br />
        <div className="flex">
          {item.sourceLinks.map((link, index) => (
            <div className="flex">
              <a
                key={index}
                className="inline-flex text-blue-500 w-full-80 mr-2"
                href={link}
                target="_blank"
              >
                [{index}]
              </a>
            </div>
          ))}
        </div>
      </p>
    </div>
  );
}
