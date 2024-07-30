import { Button } from "./aceternityui/MovingBorders";


const VisionMission = () => {
    return (
      <div className="w-full">
        <div className="w-[80vw] mt-12  mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 ">
          {[{title:'Our Vision', desc:'Our vision is to create a vibrant and inclusive community that celebrates and preserves the rich cultural heritage of India while fostering a strong sense of belonging among Indians in Belgium. We aim to be a bridge that connects Indian culture with the broader Belgian society, promoting mutual understanding and cultural exchange.'},
            {title:'Our Mission',desc: 'Our mission is to unite the Indian community in Belgium through cultural events, support services, and educational initiatives. We are dedicated to sharing the beauty and diversity of Indian culture, providing a platform for artistic expression, and offering resources to help our members thrive. Through our efforts, we aspire to build a supportive network that celebrates our shared heritage and contributes to the multicultural landscape of Belgium.'}].map((card:any) => (
            <Button
              key={card.id}
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.2rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-light dark:text-light border-neutral-200 dark:border-slate-800 "
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
                <div className="lg:ms-5">
                  <h1 className=" text-light dark:text-light text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-light dark:text-light text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    );
  };
  
  export default VisionMission;
  