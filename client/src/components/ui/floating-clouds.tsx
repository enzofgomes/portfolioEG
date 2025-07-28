export default function FloatingClouds() {
  const clouds = [
    { size: "w-16 h-10", position: "top-[10%] left-[20%]", delay: "delay-0" },
    { size: "w-12 h-8", position: "top-[30%] right-[25%]", delay: "delay-1000" },
    { size: "w-20 h-12", position: "top-[60%] left-[10%]", delay: "delay-2000" },
    { size: "w-14 h-9", position: "top-[80%] right-[15%]", delay: "delay-0" },
    { size: "w-18 h-11", position: "top-[25%] left-[70%]", delay: "delay-1000" },
    { size: "w-16 h-10", position: "top-[55%] right-[30%]", delay: "delay-2000" }
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className={`floating-cloud ${cloud.size} ${cloud.position} ${cloud.delay}`}
        />
      ))}
    </div>
  );
}
