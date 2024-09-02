import { Button } from "./aceternityui/MovingBorders";


const VisionMission = () => {
    return (
      <div className="w-full">
        <div className="w-[80vw] mt-12  mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 ">
          {[{title:'Our Vision', desc:'To be a beacon of holistic education, empowering rural youth and children with knowledge, skills, and values, fostering a society where every individual can achieve their fullest potential and contribute positively to the world.'},
            {title:'Our Mission',desc: 'At Sri Sai Group of Institutes, our mission is to provide inclusive, high-quality education across various disciplines, from foundational schooling to professional courses. We are committed to nurturing talent, promoting gender equality through scholarships, and empowering the youth in rural communities with the knowledge and skills needed for personal and professional growth. Guided by a team of dedicated and highly educated faculty, we strive to create an environment that inspires lifelong learning, critical thinking, and ethical leadership.'}].map((card:any) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.2rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(239 202 202 / 73%)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-dark dark:text-light border-neutral-200 dark:border-slate-800 "
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
                <div className="lg:ms-5">
                  <h1 className=" text-dark dark:text-light text-start text-xl md:text-3xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-dark dark:text-light text-start text-white-100 mt-3 font-semibold">
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
  